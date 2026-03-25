import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

const uploadOnCloudinary = async localFilePath => {
  try {
    console.log('api key=', process.env.CLOUDINARY_API_KEY);
    if (!localFilePath) return null;

    // FIX for Windows path
    const fixedPath = localFilePath.replace(/\\/g, '/');

    const response = await cloudinary.uploader.upload(fixedPath, {
      resource_type: 'auto',
    });

    console.log('Uploaded to Cloudinary:', response.url);

    // delete local file after success
    fs.unlinkSync(localFilePath);

    return response;
  } catch (err) {
    console.log('Cloudinary Error:', err); // IMPORTANT

    // delete file if exists
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};

export default uploadOnCloudinary;
