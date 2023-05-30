import { TUser } from '@Models/userModel'
import { Request, Response, NextFunction } from 'express'

interface IRequest extends Request {
  user?: TUser
}
const catchAsync =
  (
    theFunc: (req: IRequest, res: Response, next: NextFunction) => Promise<void>
  ) =>
  (req: IRequest, res: Response, next: NextFunction) => {
    Promise.resolve(theFunc(req, res, next)).catch(next)
  }

export default catchAsync
