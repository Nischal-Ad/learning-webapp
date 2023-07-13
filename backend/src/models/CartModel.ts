import { InferSchemaType, Schema, model } from 'mongoose'
import { TCourse } from './courseModel'

export type TCart = Partial<InferSchemaType<typeof cartSchema>>

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    cartItems: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
      },
    ],
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
)

cartSchema.pre('find', async function (next) {
  this.populate({
    path: 'cartItems',
    select: 'img title description price ratings ratings_qty',
  })
  next()
})

cartSchema.pre('save', async function (next) {
  const test = await this.populate({
    path: 'cartItems',
    select: 'price',
  })
  const totalPrice = test.cartItems.reduce((acc, item: unknown) => acc + (item as TCourse).price, 0)
  this.totalPrice = totalPrice
  next()
})

export default model<TCart>('Cart', cartSchema)
