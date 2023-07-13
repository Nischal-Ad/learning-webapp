import ErrorHandler from '@Utils/errorHandler'
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

cartSchema.pre('findOneAndDelete', async function (next) {
  const doc = this.getOptions()

  const query = this.getQuery()._id
  const cart = (await this.model.findOne({ _id: query })) as TCart | null

  if (!cart || cart.user === null) {
    next(new ErrorHandler('cart item not found!', 400))
  } else if (doc && (doc as TCart)?.user?.toString() !== cart.user?._id.toString()) {
    next(new ErrorHandler('Sorry, you are not allowed to perform this action', 400))
  }
  next()
})

export default model<TCart>('Cart', cartSchema)
