import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({
  path: './.env',
});

const app = express();
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
);

app.use(
  express.json({
    limit: '10mb',
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: '10mb',
  })
);

//to store images and files in public
app.use(express.static('public'));
import userRouter from './routes/user.routes.js';

app.use('/api/v1/user', userRouter);

export default app;
