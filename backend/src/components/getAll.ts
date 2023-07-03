/* eslint-disable @typescript-eslint/no-explicit-any */
import catchAsync from '@Middleware/catchAsync'
import ApiFeatures from '@Utils/apiFeatures'
import { Model } from 'mongoose'

const GetAll = (Model: Model<any>) =>
  catchAsync(async (req, res) => {
    const features = (await new ApiFeatures(Model.find(), req.query).filter())
      .sort()
      // .limitFields()
      .paginate()

    const data = await features.query

    res.status(200).json({
      status: true,
      total: features.total,
      totalPages: features.totalPages,
      page: features.page,
      data,
    })
  })

export default GetAll
