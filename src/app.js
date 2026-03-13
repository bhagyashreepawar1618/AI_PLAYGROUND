import express from 'express';

const app = express();

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
