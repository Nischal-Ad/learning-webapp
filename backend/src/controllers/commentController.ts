import catchAsync from '@Middleware/catchAsync'
import ErrorHandler from '@Utils/errorHandler'
import commentModel, { TComment } from '@Models/commentModel'


import GetOne from '@Components/getOne'
import { Model } from 'mongoose'

export const Createcomment = catchAsync(async (req, res, next) => {
  const { course_comment, course_id, user_id }: TComment = req.body

  const newComment: TComment = await commentModel.create({
    course_comment,
    course_id,
    user_id,
  })

  res.status(201).json({
    success: true,
    message: 'commented on course',
    data: newComment,
  })
})

export const getonecomment = GetOne(commentModel, 'comments')
