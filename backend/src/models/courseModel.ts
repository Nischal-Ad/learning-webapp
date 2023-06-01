import { CallbackError, InferSchemaType, Schema, model } from 'mongoose'

export type Course = InferSchemaType<typeof courseSchema>
const courseSchema = new Schema({
    name: {
      type: String,
      required: [true, 'please enter your name'],
      minLength: [4, 'name must be at least 4 characters'],
      maxLength: [20, 'name cannot exceed 20 characters'],
    },
    
    description: {
      type: String,
      required: [true, 'Please enter your desc'],
      
    },
    
  
    
  })
  export default model<Course>('course', courseSchema)