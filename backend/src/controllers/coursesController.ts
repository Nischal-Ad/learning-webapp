import catchAsync from '@Middleware/catchAsync'
import ErrorHandler from '@Utils/errorHandler'
import courseModel, { Course } from '@Models/courseModel'

export const Createcourse = catchAsync(async (req, res, next) => {
    const { name, description }: Course = req.body
  
    if (!name || !description )
      return next(new ErrorHandler('Please enter all field', 400))
  
   
  
    const newCourse: Course = await courseModel.create({
      name,
     description
    })
  
    // newUser.password = undefined
  
    res.status(201).json({
      success: true,
      message: 'course created',
      data: newCourse,
    })
  })