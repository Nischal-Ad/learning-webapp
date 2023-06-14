import { InferSchemaType, Schema, model } from 'mongoose'

export type TComment = InferSchemaType<typeof commentSchema>

const commentSchema = new Schema({
  comment: {
    type: String,
    required: [true, 'Please enter your comment'],
  },

  course_id: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Comment must be done to course'],
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Comment must belong to a user'],
  },
})

export default model<TComment>('Comment', commentSchema)
