import express from 'express'

//controllers
import {
  Createcomment,
  getonecomment,
  getAllComment,
  updateoneComment,
  deleteoneCoomment,
} from '@Controllers/commentController'
import { isAuth } from '@Middleware/auth'

const router = express.Router()

router.route('/comment/create').post(isAuth, Createcomment)

router.route('/comment/getone/:id').get(isAuth, getonecomment)

router.route('/comment/getall').get(isAuth, getAllComment)

router.route('/comment/updatecomment/:id').put(isAuth, updateoneComment)

router.route('/comment/deletecomment/:id').delete(isAuth, deleteoneCoomment)

export default router
