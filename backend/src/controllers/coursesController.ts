import catchAsync from '@Middleware/catchAsync'
import ErrorHandler from '@Utils/errorHandler'
import courseModel, { TCourse } from '@Models/courseModel'

export const Createcourse = catchAsync(async (req, res, next) => {
  const { name, description }: TCourse = req.body

  if (!name || !description)
    return next(new ErrorHandler('Please enter all field', 400))

  const newCourse: TCourse = await courseModel.create({
    name,
    description,
  })

  res.status(201).json({
    success: true,
    message: 'course created',
    data: newCourse,
  })
})
