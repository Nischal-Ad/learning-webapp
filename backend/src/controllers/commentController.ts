import catchAsync from '@Middleware/catchAsync'
import commentModel, { TComment } from '@Models/commentModel'

import GetOne from '@Components/getOne'
import GetAll from '@Components/getAll'
import Update from '@Components/updateOne'
import Delete from '@Components/deleteOne'
import ErrorHandler from '@Utils/errorHandler'
import courseModel from '@Models/courseModel'

export const Createcomment = catchAsync(async (req, res, next) => {
  const { rating, comment, course }: TComment = req.body

  if (!rating || !comment || !course) return next(new ErrorHandler('Please enter all field', 400))

  const validCourse = await courseModel.findOne({ _id: course })
  if (!validCourse) return next(new ErrorHandler('sorry this course couldnot be found', 400))

  const newComment: TComment = await commentModel.create({
    rating,
    comment,
    course,
    user: req.user?._id,
  })

  res.status(201).json({
    success: true,
    message: 'commented on course',
    data: newComment,
  })
})

export const getonecomment = GetOne(commentModel, 'comment')

export const getAllComment = GetAll(commentModel)

export const updateoneComment = Update(commentModel, 'comment')

export const deleteoneCoomment = Delete(commentModel, 'comment')
