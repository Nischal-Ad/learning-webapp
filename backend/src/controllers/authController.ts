import catchAsync from '@Middleware/catchAsync'
import userModel, { TUser } from '@Models/userModel'
import ErrorHandler from '@Utils/errorHandler'

export const RegisterUser = catchAsync(async (req, res, next) => {
  const { name, email, password, cpassword, role } = req.body

  if (!name || !email || !password || !cpassword || !role)
    return next(new ErrorHandler('Please enter all field', 400))

  const user = await userModel.findOne({ email })
  if (user) return next(new ErrorHandler('User Already Exist', 409))

  const newUser: TUser = await userModel.create({
    name,
    email,
    password,
    cpassword,
    role,
  })

  res.status(201).json({
    success: true,
    message: 'user register succesfully',
    data: newUser,
  })
})

export const LoginUser = catchAsync(async (req, res) => {
  const newUser: TUser = await userModel.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cpassword: req.body.cpassword,
    role: req.body.role,
  })

  res.status(201).json({
    success: true,
    message: 'user register succesfully',
    data: newUser,
  })
})
