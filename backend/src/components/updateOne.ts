/* eslint-disable @typescript-eslint/no-explicit-any */
import catchAsync from '@Middleware/catchAsync'
import ErrorHandler from '@Utils/errorHandler'
import { Model, model } from 'mongoose'

const Update = (Model: Model<any>, ModelFor: string) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findByIdAndUpdate(
      req.params.id,
      Model === model('Course')
        ? { ...req.body, author: req.user?._id }
        : { ...req.body, user: req.user?._id },
      {
        new: true,
        runValidators: true,
      }
    )

    if (!data) {
      return next(new ErrorHandler(`No ${ModelFor} found`, 404))
    }

    res.status(200).json({
      status: true,
      data,
    })
  })

export default Update
