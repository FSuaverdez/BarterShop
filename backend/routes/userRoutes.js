import { Router } from 'express'
import { requireAuth } from '../middleware/authMiddleware.js'
import {
  getUserProfile,
  userLogin,
  userRegister,
} from '../controllers/userController.js'

const router = Router()

router.post('/', userRegister)
router.post('/login', userLogin)
router.get('/profile', requireAuth, getUserProfile)

export default router
