import catchAsync from '@Middleware/catchAsync'
import userModel, { TUser } from '@Models/userModel'
import { IChangePassword } from '@Types/auth.types'
import authToken from '@Utils/authToken'
import ErrorHandler from '@Utils/errorHandler'
import crypto from 'crypto'
import sendMail from '@Utils/sendMail'

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
    user: newUser,
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

export const forgetPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body

  const user = await userModel.findOne({ email })

  if (!user) return next(new ErrorHandler('User not found', 404))

  const resetToken = user.passReset()
  await user.save({ validateBeforeSave: false })

  try {
    // const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`
    const url = `${req.protocol}://${req.get(
      'host'
    )}/resetpassword/${resetToken}`

    const message = `Click on the link to reset your password. ${url}. If you have not request then please ignore.`

    await new sendMail(email, 'Password Reset Token', message).send()

    res.status(200).json({
      success: true,
      message: `Reset Token has been sent to ${user.email}`,
    })
  } catch (err) {
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined
    await user.save({ validateBeforeSave: false })
    return next(
      new ErrorHandler(
        'There was an error sending the email. Try again later!',
        500
      )
    )
  }
})

export const resetPassword = catchAsync(async (req, res, next) => {
  const { newPassword, cNewPassword }: IChangePassword = req.body

  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex')

  const user = await userModel.findOne({
    resetPasswordToken,
    resetPasswordExpire: {
      $gt: Date.now(),
    },
  })

  if (!user)
    return next(new ErrorHandler('Token is invalid or has been expired', 400))

  user.password = newPassword
  user.cpassword = cNewPassword
  user.resetPasswordToken = undefined
  user.resetPasswordExpire = undefined

  await user.save()

  res.status(200).json({
    success: true,
    message: 'Password Changed Successfully',
  })
})
