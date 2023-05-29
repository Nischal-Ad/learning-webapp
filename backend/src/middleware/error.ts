/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import ErrorHandler from '@Utils/errorHandler'
import { Error, MongooseError } from 'mongoose'

interface IError extends ErrorHandler {
  code?: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorMiddleware = (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500
  err.message = err.message || 'Internal Server Error'

  // wrong mongodb error (CastError)
  if (err instanceof Error.CastError) {
    const message = `resource not found: ${err.path}`
    err = new ErrorHandler(message, 400)
  }

  // mongoose duplicate key error (MongoError)
  if (err instanceof MongooseError && err.code === 11000) {
    const message = `Duplicate value Entered`
    err = new ErrorHandler(message, 400)
  }

  //custom display of mongoose validation error
  if (err instanceof Error.ValidationError) {
    const message = err.message.split(': ')
    err = new ErrorHandler(message[2], 500)
  }

  // wrong JWT errors
  if (err.name === 'JsonWebTokenError') {
    const message = `json web token is invalid try again`
    err = new ErrorHandler(message, 400)
  }

  // JWT expires errors
  if (err.name === 'TokenExpiredError') {
    const message = `json web token is expired try again`
    err = new ErrorHandler(message, 400)
  }

  res.status(err.statusCode).json({
    success: err.status,
    message: err.message,
  })
}

export default errorMiddleware
