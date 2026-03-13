import { Router } from 'express';
import { registerUser } from '../controllers/user.controller.js';
import { upload } from '../middleares/multer.middleware.js';

const router = Router();

router.route('/register-user').post(
  upload.fields([
    {
      name: 'profilePicture',
      maxCount: 1,
    },
  ]),
  registerUser
);

export default router;
