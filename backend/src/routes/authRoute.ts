import express from 'express'

//controllers
import {
  LoginUser,
  RegisterUser,
  Logout,
  ChangePassword,
  forgetPassword,
  resetPassword,
} from '@Controllers/authController'
import { isAuth } from '@Middleware/auth'

const router = express.Router()

router.route('/register/user').post(RegisterUser)
router.route('/login').post(LoginUser)

router.route('/forgotpassword').post(forgetPassword)
router.route('/resetpassword/:token').put(resetPassword)

// Protected routes only for logged in user
router.route('/changepassword').put(isAuth, ChangePassword)
router.route('/logout').get(isAuth, Logout)

//protected routes only for teachers

export default router
