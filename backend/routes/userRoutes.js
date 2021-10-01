import { Router } from 'express'
import { requireAuth } from '../middleware/authMiddleware.js'
import {
  getUserProfile,
  userLogin,
  userRegister,
  updateUserProfile,
} from '../controllers/userController.js'

const router = Router()

router.post('/', userRegister)
router.post('/login', userLogin)
router.get('/profile', requireAuth, getUserProfile)
router.put('/profile', requireAuth, updateUserProfile)

export default router
