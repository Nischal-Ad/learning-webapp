import ErrorHandler from '@Utils/errorHandler'
import { InferSchemaType, Schema, model } from 'mongoose'

export type TCourse = InferSchemaType<typeof courseSchema>

const courseSchema = new Schema(
  {
    img: {
      type: String,
      required: [true, 'please upload image'],
    },
    title: {
      type: String,
      required: [true, 'please enter course title'],
      minLength: [4, 'title must be at least 4 characters'],
      maxLength: [50, 'title cannot exceed 50 characters'],
    },
    description: {
      type: String,
      required: [true, 'please enter course description'],
      minLength: [4, 'description must be at least 4 characters'],
      maxLength: [100, 'description cannot exceed 100 characters'],
    },
    contents: {
      type: [String],
      validate: {
        validator: function (value: string[]) {
          return value.length >= 1
        },
        message: 'please provide what course contains',
      },
    },
    requirements: {
      type: [String],
      validate: {
        validator: function (value: string[]) {
          return value.length >= 1
        },
        message: 'please enter course requirements',
      },
    },
    category: {
      type: String,
      required: [true, 'Please enter your course category'],
    },
    price: {
      type: Number,
      required: [true, 'Please enter your course price'],
    },
    Dprice: Number,
    ratings: {
      type: Number,
      default: 0,
    },
    ratings_qty: {
      type: Number,
      default: 0,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'course must belong to a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

courseSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'course',
  localField: '_id',
})

courseSchema.pre(['find', 'findOne'], function (next) {
  this.populate({
    path: 'author',
    select: 'name',
  }).populate({
    path: 'comments',
    select: '-__v -createdAt',
  })
  next()
})

courseSchema.pre(['findOneAndUpdate', 'findOneAndDelete'], async function (next) {
  const doc = this.getUpdate()
  const query = this.getQuery()._id
  const user = (await this.model.findOne({ _id: query })) as TCourse | null

  if (!user) {
    next(new ErrorHandler('Invalid user!', 400))
  } else if (
    doc &&
    'author' in doc &&
    (doc as TCourse).author.toString() !== user.author._id.toString()
  ) {
    next(new ErrorHandler('Sorry, you are not allowed to perform this action', 400))
  } else if (doc && 'author' in doc && ('ratings' in doc || 'ratings_qty' in doc)) {
    next(new ErrorHandler('Sorry, you are not allowed to perform this action', 400))
  }
  next()
})

courseSchema.post('findOneAndDelete', async function () {
  const course = this.getQuery()
  await model('Comment').deleteMany({ course: course._id })
})

export default model<TCourse>('Course', courseSchema)
