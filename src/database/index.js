import mongoose from 'mongoose';
import DB_NAME from '../constants.js';
export const connect_databse = async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);
    console.log('successfully connected to mongoDB!!');
  } catch (error) {
    console.log('Error occureed while connecting to database', error);
  }
};
