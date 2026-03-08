import mongoose from 'mongoose';
import DB_NAME from '../constants.js';
export const connect_databse = async () => {
  try {
    await mongoose.connect(`${DB_NAME}/${process.env.DATABASE_URL}`);
    console.log('successfully connected to mongoDB!!');
  } catch (error) {
    console.log('Error occureed while connecting to database', error);
  }
};
