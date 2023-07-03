/* eslint-disable @typescript-eslint/no-explicit-any */
import catchAsync from '@Middleware/catchAsync'
import ErrorHandler from '@Utils/errorHandler'
import { Model } from 'mongoose'

const GetOne = (Model: Model<any>, ModelFor: string) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findById(req.params.id)

    if (!data) {
      return next(new ErrorHandler(`No ${ModelFor} found`, 404))
    }

    res.status(200).json({
      status: true,
      data,
    })
  })

export default GetOne
