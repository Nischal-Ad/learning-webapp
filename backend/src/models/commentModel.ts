import { InferSchemaType, Schema, model } from 'mongoose'

export type TComment = InferSchemaType<typeof commentSchema>

const commentSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, 'please provide rating'],
  },
  comment: {
    type: String,
    required: [true, 'Please enter your comment'],
  },

  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Comment must be done to course'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Comment must belong to a user'],
  },
})

commentSchema.index({ course: 1, user: 1 }, { unique: true })

export default model<TComment>('Comment', commentSchema)
