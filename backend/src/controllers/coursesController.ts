import catchAsync from '@Middleware/catchAsync'
import ErrorHandler from '@Utils/errorHandler'
import courseModel, { TCourse } from '@Models/courseModel'
import GetAll from '@Components/getAll'
import GetOne from '@Components/getOne'
import Update from '@Components/updateOne'
import Delete from '@Components/deleteOne'

export const Createcourse = catchAsync(async (req, res, next) => {
  const { title, category, price, description, requirements, contains, img }: TCourse = req.body

  if (!title || !category || !price || !description || !requirements || !contains || !img)
    return next(new ErrorHandler('Please enter all field', 400))

  const newCourse: TCourse = await courseModel.create({
    title,
    category,
    price,
    requirements,
    contains,
    img,
    description,
    user: req.user?._id,
  })

  res.status(201).json({
    success: true,
    message: 'course created',
    data: newCourse,
  })
})

export const getAllCourse = GetAll(courseModel)

export const getoneCourse = GetOne(courseModel, 'Course')

export const updateoneCourse = Update(courseModel, 'Course')

export const deleteoneCourse = Delete(courseModel, 'Course')
