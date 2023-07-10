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
    Dprice: {
      type: Number,
      validate: {
        validator: function (value: number) {
          if (value <= (this as TCourse).price) {
            throw new Error('Discount must be greater than the current price.')
          } else return true
        },
      },
    },
    ratings: {
      type: Number,
      default: 0,
    },
    ratings_qty: {
      type: Number,
      default: 0,
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
    path: 'comments',
    select: '-__v -createdAt',
  })
  next()
})

courseSchema.pre(['findOneAndUpdate', 'findOneAndDelete'], async function (next) {
  const doc = this.getUpdate()

  console.log(doc)

  const query = this.getQuery()._id
  const course = (await this.model.findOne({ _id: query })) as TCourse | null

  if (!course) {
    next(new ErrorHandler('Invalid course!', 400))
  } else if (doc && ('ratings' in doc || 'ratings_qty' in doc)) {
    next(new ErrorHandler('Sorry, you are not allowed to perform this action', 400))
  } else if (
    doc &&
    'Dprice' in doc &&
    (doc.Dprice !== undefined || doc.Dprice !== null) &&
    doc?.Dprice <= course?.price
  ) {
    next(new ErrorHandler('Discount must be greater than the current price.', 400))
  }
  next()
})

courseSchema.post('findOneAndDelete', async function () {
  const course = this.getQuery()
  await model('Comment').deleteMany({ course: course._id })
})

export default model<TCourse>('Course', courseSchema)
