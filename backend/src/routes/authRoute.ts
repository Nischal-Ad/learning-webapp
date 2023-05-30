import express from 'express'

//controllers
import {
  LoginUser,
  RegisterUser,
  Logout,
  ChangePassword,
} from '@Controllers/authController'
import { isAuth } from '@Middleware/auth'

const router = express.Router()

router.route('/register/user').post(RegisterUser)
router.route('/login').post(LoginUser)
router.route('/logout').get(Logout)

// Protected routes only for logged in user
router.route('/changepassword').put(isAuth, ChangePassword)

//protected routes only for teachers

export default router
