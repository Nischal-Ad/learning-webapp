import { InferSchemaType, Schema, model } from 'mongoose'

export type TComment = InferSchemaType<typeof commentSchema>

const commentSchema = new Schema({
  course_comment: {
    type: String,
  },

  course_id: {
    type: String,
    required: [true, 'Please enter your topic_id'],
  },
  user_id: {
    type: String,
    required: [true, 'Please enter your enroll'],
  },
})

export default model<TComment>('comment', commentSchema)
