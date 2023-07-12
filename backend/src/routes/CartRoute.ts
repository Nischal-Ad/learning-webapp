import express from 'express'

//controllers
import { isAuth } from '@Middleware/auth'
import { allCart, createCart, deleteCart } from '@Controllers/CartController'

const router = express.Router()

router.route('/user/addcart').post(isAuth, createCart)
router.route('/user/allcart').get(isAuth, allCart)
router.route('/user/cart/delete/:id').delete(isAuth, deleteCart)

export default router
