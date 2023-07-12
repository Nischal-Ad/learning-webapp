/* eslint-disable @typescript-eslint/no-explicit-any */
import catchAsync from '@Middleware/catchAsync'
import ErrorHandler from '@Utils/errorHandler'
import { Model } from 'mongoose'

export const GetAllByUser = (Model: Model<any>, ModelFor: string) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.find({ user: req.user?._id })

    if (!data) {
      return next(new ErrorHandler(`No ${ModelFor} found`, 404))
    }

    res.status(200).json({
      status: 'success',
      data,
    })
  })
