import { InferSchemaType, Schema, model } from 'mongoose'

export type TLearningPath = InferSchemaType<typeof learningPathSchema>

const learningPathSchema = new Schema({

  topic_title: {
    type: String,
    required: [true, 'Please enter your topic title'],
  },
//userid
  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Topic title must belong to a user'],
  },
})

export default model<TLearningPath>('LearningPath', learningPathSchema)
