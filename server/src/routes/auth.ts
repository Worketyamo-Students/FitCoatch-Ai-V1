import express, { Router } from 'express';
import { authController } from '../controllers/authController';

const router: Router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

export { router as authRoutes };
