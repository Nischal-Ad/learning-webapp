import catchAsync from '@Middleware/catchAsync'
import userModel from '@Models/userModel'

export const profile = catchAsync(async (req, res) => {
  const user = await userModel.findById(req.user?._id)

  res.status(200).json({
    success: true,
    user,
  })
})
