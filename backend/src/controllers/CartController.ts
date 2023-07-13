import catchAsync from '@Middleware/catchAsync'
import cartModel, { TCart } from '@Models/CartModel'
import Delete from '@Components/deleteOne'
import ErrorHandler from '@Utils/errorHandler'
import { GetAllByUser } from '@Components/GetAllByUser'

export const createCart = catchAsync(async (req, res, next) => {
  const { cartItems }: TCart = req.body
  if (!cartItems) return next(new ErrorHandler('you must add course', 400))

  let cart
  const userExist = await cartModel.findOne({ user: req.user?._id })

  if (userExist) {
    const courseExist = await cartModel.findOne({ cartItems: { $in: cartItems } })
    if (courseExist) {
      return next(new ErrorHandler('course already exist in cart', 400))
    } else {
      cart = await cartModel.findOne({ user: req.user?._id })
      cart?.cartItems?.push(...cartItems)
      await cart?.save()
    }
  } else {
    cart = await cartModel.create({
      cartItems,
      user: req.user?._id,
    })
  }

  res.status(201).json({
    success: true,
    message: 'added to cart',
    data: cart,
  })
})

export const allCart = GetAllByUser(cartModel, 'cart')

export const deleteCart = Delete(cartModel, 'cart')
