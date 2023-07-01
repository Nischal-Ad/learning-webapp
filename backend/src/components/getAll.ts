/* eslint-disable @typescript-eslint/no-explicit-any */
import catchAsync from '@Middleware/catchAsync'
import ApiFeatures from '@Utils/apiFeatures'
import { Model } from 'mongoose'

const GetAll = (Model: Model<any>) =>
  catchAsync(async (req, res) => {
    const { page = 1, limit = 10 } = req.query

    const features = new ApiFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate(+page, +limit)

    const data = await features.query
    const total = await Model.find().countDocuments()
    const totalPages = Math.ceil(total / +limit)

    res.status(200).json({
      status: 'success',
      total,
      totalPages,
      page: +page,
      data,
    })
  })

export default GetAll
