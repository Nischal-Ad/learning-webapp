/* eslint-disable @typescript-eslint/no-explicit-any */
import catchAsync from '@Middleware/catchAsync'
import { Model } from 'mongoose'

export const GetAllByUser = (Model: Model<any>) =>
  catchAsync(async (req, res) => {
    const data = await Model.findOne({ user: req.user?._id })

    res.status(200).json({
      success: true,
      data,
    })
  })
