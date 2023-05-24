/* eslint-disable @typescript-eslint/no-explicit-any */
import catchAsync from '@Middleware/catchAsync'
import ErrorHandler from '@Utils/errorHandler'
import { Model } from 'mongoose'

const Update = (Model: Model<any>, ModelFor: string) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!data) {
      return next(new ErrorHandler(`No ${ModelFor} found`, 404))
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: data,
      },
    })
  })

export default Update
