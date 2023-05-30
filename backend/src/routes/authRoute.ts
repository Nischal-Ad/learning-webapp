import express from 'express'

//controllers
import { LoginUser, RegisterUser, Logout } from '@Controllers/authController'
import { isAuth, roles } from '@Middleware/auth'

const router = express.Router()

router.route('/register/user').post(RegisterUser)
router.route('/login').post(LoginUser)
router.route('/logout').get(Logout)

// Protected routes only for logged in user
router.use(isAuth)

//protected routes only for teachers
router.use(roles('teacher'))

export default router
