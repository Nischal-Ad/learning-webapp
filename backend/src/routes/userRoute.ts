import express from 'express'

//controllers
import { TestUser } from '@Controllers/userController'
import {
  Create,
  CreateOneTest,
  DeleteTest,
  GetAllUser,
  GetOneUser,
  updateOne,
} from '@Controllers/authController'

const router = express.Router()

router.route('/test').get(TestUser)
router.route('/create').post(Create)
router.route('/delete/:id').delete(DeleteTest)
router.route('/getall').get(GetAllUser)
router.route('/createone').post(CreateOneTest)
router.route('/getone/:id').get(GetOneUser)
router.route('/updateone/:id').put(updateOne)

export default router
