import catchAsync from '@Middleware/catchAsync'
import userModel, { TUser } from '@Models/userModel'
import authToken from '@Utils/authToken'
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

export const LoginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return next(new ErrorHandler('Please provide email and password!', 400))
  }
  // 2) Check if user exists && password is correct
  const user = await userModel.findOne({ email }).select('+password')

  if (!user || !(await user.comparePassword(password))) {
    return next(new ErrorHandler('Incorrect email or password', 401))
  }

  authToken(req, res, user, 'logged in succesfully', 200)
})

export const Logout = catchAsync(async (req, res) => {
  res.status(200).cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
    sameSite: 'none',
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  })
  res.status(200).json({ success: true, message: 'logout successful' })
})
