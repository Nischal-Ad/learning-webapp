import express from 'express'

//controllers
import { Createcourse } from '@Controllers/coursesController'
import { isAuth, roles } from '@Middleware/auth'

const router = express.Router()

router.route('/course/create').post(isAuth, roles('teacher'), Createcourse)

export default router
