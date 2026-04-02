import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';
import asyncHandler from '../utils/asyncHandler.js';
import { User } from '../models/user.model.js';
import uploadOnCloudinary from '../utils/cloudinary.js';
import mongoose from 'mongoose';

export const registerUser = asyncHandler(async (req, res) => {
  //take all inputs from user
  console.log('hello from controlller');
  const { fullname, email, username, password } = req.body;

  console.log('inputs=', fullname, email);

  //validation
  if (!fullname || !username || !email || !password) {
    throw new ApiError(409, 'All feilds are compulsory');
  }

  //if user already exists
  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    throw new ApiError(400, 'User already exists');
  }

  //take profile picture
  const profileLocalPath = req.files?.profilePicture?.[0]?.path;

  console.log('picture=', profileLocalPath);

  if (!profileLocalPath) {
    throw new ApiError(400, 'Profile Picture is Required');
  }

  const profilePicture = await uploadOnCloudinary(profileLocalPath);

  if (!profilePicture) {
    throw new ApiError(
      500,
      'something went wrong while uploading on cloudinary'
    );
  }

  const user = await User.create({
    fullname,
    email,
    username,
    password,
    profilePicture: profilePicture?.url,
  });

  const registeredUser = await User.findById(user._id).select('-password');

  if (!registeredUser) {
    throw new ApiError(500, 'Something went wrong while registering user');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, registeredUser, 'User registerd successfully'));
});

export const LoginUser = asyncHandler(async (req, res) => {
  //take input from user
  const { username, email } = req.body;

  //validation
  if (!username || !email) {
    throw new ApiError(400, 'Username or Email is required');
  }

  //check if user is registered or not
  const registeredUser = await User.find({
    $or: [{ username }, { email }],
  });

  //if user is not registered throw an error
  if (registeredUser) {
    throw new ApiError(400, 'User is not registered');
  }

  //if user is registered then generate access and refresh Tokens
  const { accessToken, refreshtoken } = generateAccessAndRefreshTokens(
    registeredUser._id
  );

  //send Tokens
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        accessToken,
        refreshtoken,
        registeredUser,
      },
      'User Loggedin successfully'
    )
  );
});
