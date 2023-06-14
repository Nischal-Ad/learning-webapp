import express from 'express'

//controllers
import { isAuth } from '@Middleware/auth'
import {
  khaltiPayment,
  khaltiVerification,
} from '@Controllers/KhaltiController'

const router = express.Router()

router.route('/khaltipayment').post(isAuth, khaltiPayment)
router.route('/khaltiverification').post(isAuth, khaltiVerification)

export default router
