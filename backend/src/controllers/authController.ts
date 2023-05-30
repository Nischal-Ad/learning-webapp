import catchAsync from '@Middleware/catchAsync'
import userModel, { TUser } from '@Models/userModel'
import { IChangePassword } from '@Types/auth.types'
import authToken from '@Utils/authToken'
import ErrorHandler from '@Utils/errorHandler'

interface IRemember {
  remember: boolean
}

export const RegisterUser = catchAsync(async (req, res, next) => {
  const { name, email, password, cpassword, role }: TUser = req.body

  if (!name || !email || !password || !cpassword)
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

  newUser.password = undefined

  res.status(201).json({
    success: true,
    message: 'user register succesfully',
    data: newUser,
  })
})

export const LoginUser = catchAsync(async (req, res, next) => {
  const { email, password }: TUser = req.body
  const { remember }: IRemember = req.body

  if (!email || !password) {
    return next(new ErrorHandler('Please provide email and password!', 400))
  }
  // 2) Check if user exists && password is correct
  const user = await userModel.findOne({ email }).select('+password')

  if (!user || !(await user.comparePassword(password))) {
    return next(new ErrorHandler('Incorrect email or password', 401))
  }

  authToken(req, res, user, remember, 'logged in succesfully', 200)
})

export const Logout = catchAsync(async (req, res) => {
  res.clearCookie('token')
  res.status(200).json({ success: true, message: 'logout successful' })
})

export const ChangePassword = catchAsync(async (req, res, next) => {
  const { oldPassword, newPassword, cNewPassword }: IChangePassword = req.body
  if (!oldPassword || !newPassword || !cNewPassword)
    return next(new ErrorHandler('Please enter all field', 400))

  const user = await userModel.findById(req.user?._id).select('+password')

  if (!user) return next(new ErrorHandler('User not found', 404))

  const isMatch = await user.comparePassword(oldPassword)

  if (!isMatch) return next(new ErrorHandler('Incorrect Old Password', 401))

  user.password = newPassword
  user.cpassword = cNewPassword

  await user.save()

  res.clearCookie('token')
  res.status(200).json({
    success: true,
    message: 'Password Changed Successfully! please login again',
  })
})
