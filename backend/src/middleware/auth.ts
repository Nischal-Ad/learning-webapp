import ErrorHandler from '@Utils/errorHandler'
import catchAsync from './catchAsync'
import jwt from 'jsonwebtoken'
import userModel, { TUser } from '@Models/userModel'

export const isAuth = catchAsync(async (req, res, next) => {
  let token
  const JWT_SECRET = process.env.JWT_SECRET

  if (!JWT_SECRET) {
    throw new Error('something went wrong')
  }

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]
  } else if (req.cookies.token) {
    token = req.cookies.token
  }

  if (!token) {
    return next(new ErrorHandler('You are not logged in!', 401))
  }

  const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload

  const currentUser = await userModel.findById(decoded.id)
  if (!currentUser) {
    return next(new ErrorHandler('user doesnot exist', 401))
  }

  // 4) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat as number)) {
    return next(new ErrorHandler('Please log in again.', 401))
  }

  req.user = currentUser
  next()
})

export const roles = (...roles: Pick<TUser, 'role'>['role'][]) => {
  return catchAsync(async (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(new ErrorHandler('sorry you cannot access this page', 403))
    }
    next()
  })
}
