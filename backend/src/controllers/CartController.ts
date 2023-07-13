import catchAsync from '@Middleware/catchAsync'
import cartModel, { TCart } from '@Models/CartModel'
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

export const deleteCart = catchAsync(async (req, res, next) => {
  const { id } = req.params
  let cartData
  const cart = await cartModel.findOne({ user: req.user?._id })

  if (!cart || !cart.cartItems) return next(new ErrorHandler('cart not found', 404))

  const courseIndex = cart?.cartItems.findIndex((item) => item._id.toString() === id)

  if (courseIndex === -1 || courseIndex === undefined) {
    return next(new ErrorHandler('Course not found in the cart', 400))
  }
  cart.cartItems && cart.cartItems.splice(courseIndex, 1)
  await cart.save()

  if (cart.cartItems?.length === 0) {
    await cartModel.findByIdAndDelete(cart?._id)
  } else {
    cartData = await cartModel.findOne({ user: req.user?._id })
  }

  res.status(200).json({
    success: true,
    message: 'item deleted',
    data: cartData,
  })
})

export const allCart = GetAllByUser(cartModel)
