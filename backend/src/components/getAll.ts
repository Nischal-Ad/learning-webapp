/* eslint-disable @typescript-eslint/no-explicit-any */
import catchAsync from '@Middleware/catchAsync'
import { Model } from 'mongoose'

const GetAll = (Model: Model<any>) =>
  catchAsync(async (req, res) => {
    const data = await Model.find()

    res.status(200).json({
      status: 'success',
      data,
    })
  })

export default GetAll
