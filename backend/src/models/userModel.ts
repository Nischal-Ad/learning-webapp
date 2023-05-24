import { InferSchemaType, Schema, model } from 'mongoose'
import validator from 'validator'

type TUser = InferSchemaType<typeof userSchema>

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'please enter your name'],
    minLength: [4, 'name must be at least 4 characters'],
    maxLength: [20, 'name cannot exceed 20 characters'],
  },
  email: {
    type: String,
    required: [true, 'please enter your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'please enter your password'],
    select: false,
  },
})

export default model<TUser>('User', userSchema)
