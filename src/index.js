import app from './app.js';
import dotenv from 'dotenv';
import { connect_databse } from './database/index.js';
dotenv.config();

connect_databse()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is listening to port ${process.env.PORT}`);
    });
  })
  .catch(error => {
    console.log('Error occured while connecting to MongoDB', error);
  });
