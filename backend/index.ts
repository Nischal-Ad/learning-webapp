import connectDatabase from '@Config/database'
import dotenv from 'dotenv'
import app from './src/app'

//handeling uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log(
    `Error ${err.message} sutting down the server due to uncaught exception`
  )
  process.exit(1)
})

//setting path for dotenv config
dotenv.config({ path: './src/config/config.env' })

// connectDatabase
connectDatabase()

const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`)
})

//unhandled promise rejection
process.on('unhandledRejection', (err: Error) => {
  console.log(
    `Error ${err.message} sutting down the server due to uncaught exception`
  )

  server.close(() => {
    process.exit(1)
  })
})

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully')
  server.close(() => {
    console.log('💥 Process terminated!')
  })
})
