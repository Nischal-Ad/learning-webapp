import express from 'express'

//controllers
import { isAuth } from '@Middleware/auth'
import { profile } from '@Controllers/userController'

const router = express.Router()

router.route('/profile').get(isAuth, profile)

export default router
