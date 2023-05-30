import { CallbackError, InferSchemaType, Schema, model } from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'

export type TUser = InferSchemaType<typeof userSchema> & {
  comparePassword: (password: string) => Promise<boolean>
}

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
    required: [true, 'Please enter your password'],
    select: false,
  },
  cpassword: {
    type: String,
    required: [true, 'Please confirm your password'],
  },

  role: {
    type: String,
    enum: {
      values: ['student', 'teacher'] as const,
      message: 'please enter a valid role',
    },
    default: 'student',
  },
})

userSchema.path('cpassword').validate(async function (cpassword: string) {
  const password: string = this.get('password')
  return cpassword === password
}, 'Your passwords do not match')

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  try {
    const pass = this.password
    if (!pass) {
      throw new Error('something went wrong')
    }
    this.password = await bcrypt.hash(pass, 12)
    next()
  } catch (error: unknown) {
    return next(error as CallbackError)
  }

  this.cpassword = undefined
  next()
})

userSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password)
}

export default model<TUser>('User', userSchema)
