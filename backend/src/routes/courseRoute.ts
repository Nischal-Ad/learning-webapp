import express from 'express'

//controllers
import { Createcourse,getAllCourse,getoneCourse,updateoneCourse,deleteoneCourse } from '@Controllers/coursesController'
import { isAuth, roles } from '@Middleware/auth'

const router = express.Router()

router.route('/course/create').post(isAuth, roles('teacher'), Createcourse)

router.route('/course/getall').get(isAuth, roles('teacher'), getAllCourse)

router.route('/course/getone/:id').get(isAuth, roles('teacher'), getoneCourse)

router.route('/course/updatecourse/:id').put(isAuth, roles('teacher'), updateoneCourse)

router.route('/course/deletecourse/:id').delete(isAuth, roles('teacher'), deleteoneCourse)

export default router
