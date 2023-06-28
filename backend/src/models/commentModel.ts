import { InferSchemaType, Query, Schema, model } from 'mongoose'
import courseModel from './courseModel'
import ErrorHandler from '@Utils/errorHandler'

export type TComment = InferSchemaType<typeof commentSchema> & {
  calcAverageRatings: (id?: object) => Promise<void>
}

export interface CommentQuery extends Query<TComment | null, TComment> {
  temp: TComment
}

const commentSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

commentSchema.index({ course: 1, user: 1 }, { unique: true })

commentSchema.virtual('duration').get(function () {
  const publishTime = this.updatedAt.getTime()
  const currentTime = new Date().getTime()
  const diff = currentTime - publishTime
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 30) {
    return `${Math.floor(days / 30)} months ago`
  } else if (days > 7) {
    return `${Math.floor(days / 7)} weeks ago`
  } else if (days > 0) {
    return `${days} days ago`
  } else if (hours > 0) {
    return `${hours} hours ago`
  } else if (minutes > 0) {
    return `${minutes} minutes ago`
  } else {
    return `just now`
  }
})

commentSchema.pre(['find', 'findOne'], function (next) {
  this.populate({
    path: 'user',
  }).populate({
    path: 'course',
  })
  next()
})

commentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery()._id
  const doc = this.getUpdate()
  const data = await this.model.findOne({ _id: query })

  if (!data) {
    next(new ErrorHandler('Sorry, comment could not be found', 400))
  } else if (doc && data.course._id.toString() !== (doc as TComment).course) {
    next(new ErrorHandler('Sorry, course could not be found', 400))
  }

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
      ratings: stats[0].avgRating.toFixed(1),
    })
  } else {
    await courseModel.findByIdAndUpdate(id, {
      ratings_qty: 0,
      ratings: 0,
    })
  }
}

commentSchema.post('save', async function () {
  await (this.constructor as unknown as TComment).calcAverageRatings(this.course)
})

commentSchema.pre<CommentQuery>(['findOneAndDelete', 'findOneAndUpdate'], async function (next) {
  const documentId: object = this.getQuery()._id
  this.temp = (await this.model.findOne({ _id: documentId })) as TComment

  next()
})

commentSchema.post<CommentQuery>(['findOneAndUpdate', 'findOneAndDelete'], async function () {
  await (this.temp.constructor as unknown as TComment).calcAverageRatings(this.temp.course?._id)
})

export default model<TComment>('Comment', commentSchema)
