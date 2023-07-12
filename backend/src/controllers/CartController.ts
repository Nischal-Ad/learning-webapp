import catchAsync from '@Middleware/catchAsync'
import cartModel, { TCart } from '@Models/CartModel'
import Delete from '@Components/deleteOne'
import ErrorHandler from '@Utils/errorHandler'
import { GetAllByUser } from '@Components/GetAllByUser'

export const createCart = catchAsync(async (req, res, next) => {
  const { course }: TCart = req.body
  if (!course) return next(new ErrorHandler('you must add course', 400))
  const newCart: TCart = await cartModel.create({
    course,
    user: req.user?._id,
  })
  res.status(201).json({
    success: true,
    message: 'added to cart',
    data: newCart,
  })
})

export const allCart = GetAllByUser(cartModel, 'cart')

export const deleteCart = Delete(cartModel, 'cart')
