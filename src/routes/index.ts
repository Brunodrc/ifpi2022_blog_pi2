import { Router } from 'express';
import authRoutes from './auth'
import coreRoutes from './core'
import { postRoutes } from './post-router';

const router = Router()

router.use('/auth',authRoutes)
router.use('/core',coreRoutes)
router.use('/posts', postRoutes)

export default router
