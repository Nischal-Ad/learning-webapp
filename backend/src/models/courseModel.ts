import { InferSchemaType, Schema, model } from 'mongoose'

export type TCourse = InferSchemaType<typeof courseSchema>

const courseSchema = new Schema({
  title: {
    type: String,
    required: [true, 'please enter your name'],
    minLength: [4, 'name must be at least 4 characters'],
    maxLength: [20, 'name cannot exceed 20 characters'],
  },

  category: {
    type: String,
    required: [true, 'Please enter your course_category'],
  },
  topic: {
    type: Number,
    required: [true, 'Please enter your topic_id'],
  },
  enroll: {
    type: String,
    required: [true, 'Please enter your enroll'],
  },
  ratings: {
    type: Number,
    default: 0,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
    set: (val: number) => Math.round(val * 10) / 10,
  },
  ratings_qty: {
    type: Number,
    default: 0,
  },
})

export default model<TCourse>('Course', courseSchema)
