import Delete from '@Components/deleteOne'
import catchAsync from '@Middleware/catchAsync'
import userModel from '@Models/userModel'
import CreateTest from '@Components/CreateOne'
import GetAll from '@Components/getAll'
import GetOne from '@Components/getOne'
import Update from '@Components/updateOne'

export const Create = catchAsync(async (req, res) => {
  const newUser = await userModel.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })

  res.status(200).json({
    success: true,
    message: 'user created',
    data: newUser,
  })
})

export const DeleteTest = Delete(userModel, 'user')
export const CreateOneTest = CreateTest(userModel)
export const GetAllUser = GetAll(userModel)
export const GetOneUser = GetOne(userModel, 'user')
export const updateOne = Update(userModel, 'user')
