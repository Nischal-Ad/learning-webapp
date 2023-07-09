import express from 'express'

//controllers
import {
  Createcourse,
  getAllCourse,
  getoneCourse,
  updateoneCourse,
  deleteoneCourse,
} from '@Controllers/coursesController'
import { isAuth, roles } from '@Middleware/auth'

const router = express.Router()

router.route('/course/create').post(isAuth, roles('admin'), Createcourse)

router.route('/course/getall').get(isAuth, getAllCourse)

router.route('/course/getone/:id').get(isAuth, getoneCourse)

router.route('/course/updatecourse/:id').put(isAuth, roles('admin'), updateoneCourse)

router.route('/course/deletecourse/:id').delete(isAuth, roles('admin'), deleteoneCourse)

export default router
