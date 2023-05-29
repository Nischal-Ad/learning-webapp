import express from 'express'

//controllers
import { LoginUser, RegisterUser, Logout } from '@Controllers/authController'

const router = express.Router()

router.route('/register/user').post(RegisterUser)
router.route('/login').post(LoginUser)
router.route('/logout').get(Logout)

export default router
