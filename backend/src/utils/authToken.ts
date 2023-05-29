import { Request, Response } from 'express'
import { Document } from 'mongoose'
import jwt from 'jsonwebtoken'

const authToken = (
  req: Request,
  res: Response,
  user: Document,
  message: string,
  statusCode: number
) => {
  const JWT_SECRET = process.env.JWT_SECRET

  if (!JWT_SECRET) {
    throw new Error('jwt secret key is missing')
  }

  if (!process.env.JWT_COOKIE_EXPIRES_IN) {
    throw new Error('jwt cookie expire value is missing')
  }

  const token = jwt.sign({ id: user._id }, JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })

  res
    .status(statusCode)
    .cookie('token', token, {
      expires: new Date(
        Date.now() +
          parseInt(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000
      ),

      httpOnly: true,
      secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
      sameSite: 'none',
    })
    .json({
      success: true,
      message,
      user,
    })
}

export default authToken
