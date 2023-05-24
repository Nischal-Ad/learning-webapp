/* eslint-disable @typescript-eslint/no-explicit-any */
import catchAsync from '@Middleware/catchAsync'
import { Model } from 'mongoose'

const Create = (Model: Model<any>) =>
  catchAsync(async (req, res) => {
    const data = await Model.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        data: data,
      },
    })
  })

export default Create
