import mongoose, { ConnectOptions } from 'mongoose'

const connectDatabase = async () => {
  try {
   
    const dbURI = process.env.DB_URI
    
    const options: ConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.MongooseOptions
 
    if (!dbURI) {
      throw new Error('DB_URI is not set')
    }
    // anup5
    // V8FZ2o1GVedRqADk
    await mongoose.connect(dbURI, options)
    console.log('Database connected')
  } catch (error) {
    console.error('Error connecting to database:', error)
  }
}

export default connectDatabase
