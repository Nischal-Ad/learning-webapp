import express from 'express'

//controllers
import { Createcomment, getonecomment } from '@Controllers/commentController'
import { isAuth } from '@Middleware/auth'

const router = express.Router()

router.route('/comment/create').post(isAuth, Createcomment)
router.route('/comment/getone/:id').get(isAuth, getonecomment)

export default router
