import express from 'express'

//controllers
import {
  CreateLearningPath,
  getonelearningpath,
  getAllLearningPath,
  updateonelearningpath,
  deleteonelearningpath,
} from '@Controllers/learningPathController'
import { isAuth } from '@Middleware/auth'

const router = express.Router()

router.route('/learningpath/create').post(isAuth,CreateLearningPath)

router.route('/learningpath/getone/:id').get(isAuth,getonelearningpath)

router.route('/learningpath/getall').get(isAuth,getAllLearningPath)

router.route('/learningpath/updatelearningpath/:id').put(isAuth,updateonelearningpath)

router.route('/learningpath/deletelearningpath/:id').delete(isAuth,deleteonelearningpath)

export default router
