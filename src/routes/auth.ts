import { json, Router } from 'express';
import { AuthController } from '../controllers/AuthController';

const router = Router()

const authController = new AuthController()

router.post('/signup', authController.signup)
router.post('/signin', authController.signin)

router.post('/me', authController.me)

export default router