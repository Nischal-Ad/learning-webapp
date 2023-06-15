import catchAsync from '@Middleware/catchAsync'

import learningPathModel, { TLearningPath } from '@Models/learningPathModel'

import GetAll from '@Components/getAll'
import GetOne from '@Components/getOne'
import Update from '@Components/updateOne'
import Delete from '@Components/deleteOne'

export const CreateLearningPath = catchAsync(async (req, res) => {

  const { topic_title,created_by }: TLearningPath = req.body

  const newLearningPath: TLearningPath = await learningPathModel.create({
    topic_title,
    created_by
  })

  res.status(201).json({
    success: true,
    message: 'topic created by user',
    data: newLearningPath,
  })
})

export const getonelearningpath = GetOne(learningPathModel, 'LearningPath')

export const getAllLearningPath = GetAll(learningPathModel)


export const updateonelearningpath = Update(learningPathModel, 'LearningPath')

export const deleteonelearningpath = Delete(learningPathModel, 'LearningPath')