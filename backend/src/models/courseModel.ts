import { InferSchemaType, Schema, model } from 'mongoose'

export type TCourse = InferSchemaType<typeof courseSchema>

const courseSchema = new Schema({
  course_title: {
    type: String,
    required: [true, 'please enter your name'],
    minLength: [4, 'name must be at least 4 characters'],
    maxLength: [20, 'name cannot exceed 20 characters'],
  },

  course_category: {
    type: String,
    required: [true, 'Please enter your course_category'],
  },
  topic_id: {
    type: Number,
    required: [true, 'Please enter your topic_id'],
  },
  enroll: {
    type: String,
    required: [true, 'Please enter your enroll'],
  },
})

export default model<TCourse>('Course', courseSchema)
