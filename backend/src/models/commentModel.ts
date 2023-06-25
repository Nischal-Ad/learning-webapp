import { InferSchemaType, Schema, model } from 'mongoose'
import courseModel from './courseModel'

export type TComment = InferSchemaType<typeof commentSchema> & {
  calcAverageRatings: (id?: object) => Promise<void>
}

const commentSchema = new Schema({
  rating: {
    type: Number,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
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

commentSchema.pre(['find', 'findOne'], function (next) {
  this.populate({
    path: 'user',
  }).populate({
    path: 'course',
  })
  next()
})

commentSchema.statics.calcAverageRatings = async function (id: object) {
  const stats = await this.aggregate([
    {
      $match: { course: id },
    },
    {
      $group: {
        _id: '$course',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ])

  if (stats.length > 0) {
    await courseModel.findByIdAndUpdate(id, {
      ratings_qty: stats[0].nRating,
      ratings: stats[0].avgRating,
    })
  }
}

commentSchema.post('save', async function () {
  await (this.constructor as unknown as TComment).calcAverageRatings(this.course)
})

export default model<TComment>('Comment', commentSchema)
