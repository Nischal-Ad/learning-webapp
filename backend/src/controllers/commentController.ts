import catchAsync from '@Middleware/catchAsync'
import commentModel, { TComment } from '@Models/commentModel'

import GetOne from '@Components/getOne'

export const Createcomment = catchAsync(async (req, res) => {
  const { rating, comment, course, user }: TComment = req.body

  const newComment: TComment = await commentModel.create({
    rating,
    comment,
    course,
    user,
  })

  res.status(201).json({
    success: true,
    message: 'commented on course',
    data: newComment,
  })
})

export const getonecomment = GetOne(commentModel, 'comments')
