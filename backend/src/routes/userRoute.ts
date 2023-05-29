import express from 'express'

//controllers
import { RegisterUser } from '@Controllers/authController'

const router = express.Router()

router.route('/register/user').post(RegisterUser)

export default router
