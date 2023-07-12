import { InferSchemaType, Schema, model } from 'mongoose'

export type TCart = Partial<InferSchemaType<typeof cartSchema>>

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
      unique: true,
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
)

cartSchema.pre(['find', 'findOne'], function (next) {
  this.populate({
    path: 'courses',
    select: 'img title description price ratings ratings_qty',
  })
  next()
})

export default model<TCart>('Cart', cartSchema)
