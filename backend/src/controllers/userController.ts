import catchAsync from '@Middleware/catchAsync'
import ErrorHandler from '@Utils/errorHandler'

export const TestUser = catchAsync(async (req, res, next) => {
  const user = ['dad', 'rams', 'shyam']

  if (!user.includes('rams')) {
    return next(new ErrorHandler('user not found ', 404))
  }
  res.status(200).json({
    success: true,
    message: 'this is for test purpose',
  })
})
