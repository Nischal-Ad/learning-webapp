import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { TUser } from '@Models/userModel'
import { Document } from 'mongoose'

const authToken = (
  req: Request,
  res: Response,
  user: Document & TUser,
  remember = false,
  message: string,
  statusCode: number
) => {
  const JWT_SECRET = process.env.JWT_SECRET
  const expiresIn = process.env.JWT_EXPIRES_IN

  if (!JWT_SECRET) {
    throw new Error('jwt secret key is missing')
  }

  if (!expiresIn) {
    throw new Error('jwt cookie expire value is missing')
  }

  const token = jwt.sign({ id: user._id }, JWT_SECRET, {
    expiresIn: expiresIn,
  })

  user.password = undefined

  res
    .status(statusCode)
    .cookie('token', token, {
      expires: remember
        ? new Date(Date.now() + parseInt(expiresIn) * 24 * 60 * 60 * 1000)
        : undefined,
      httpOnly: true,
      // secure: true, set it to ture after api test in postman is completed . NOTE: it must be true while in production or final product
      sameSite: 'none',
    })
    .json({
      success: true,
      message,
      user,
    })
}

export default authToken
