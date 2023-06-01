import express from 'express'

//controllers
import {
    Createcourse
  } from '@Controllers/coursesController'
const router = express.Router()
router.route('/course').post(Createcourse)

export default router
