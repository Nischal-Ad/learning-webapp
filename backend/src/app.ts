import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import ErrorHandle from '@Middleware/error'
import ErrorHandler from '@Utils/errorHandler'

//routes
import UserRouter from '@Routes/userRoute'

const app = express()

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(cookieParser())

app.use(
  cors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
)

app.get('/', (req, res) =>
  res.send(
    `<h1>Site is Working. ${
      process.env.FRONTEND_URL
        ? `click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
        : ''
    }`
  )
)
app.use('/api/v1', UserRouter)

app.all('*', (req, res, next) => {
  next(new ErrorHandler(`Can't find ${req.originalUrl} on this server!`, 404))
})

//middleware for error
app.use(ErrorHandle)

export default app
