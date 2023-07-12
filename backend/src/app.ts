import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import ErrorHandle from '@Middleware/error'
import ErrorHandler from '@Utils/errorHandler'
import { rateLimit } from 'express-rate-limit'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import compression from 'compression'
import hpp from 'hpp'
import xss from 'xss-clean'

//routes
import UserRouter from '@Routes/userRoute'
import AuthRouter from '@Routes/authRoute'
import CourseRouter from '@Routes/courseRoute'
import KhaltiRouter from '@Routes/khaltiRoute'
import CommentRouter from '@Routes/commentRoute'
import CartRouter from '@Routes/CartRoute'
import LearningpathRouter from '@Routes/learningPathRoute'

//start express app
const app = express()
app.enable('trust proxy')

app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.use(cookieParser())
app.use(helmet())
app.use(mongoSanitize())
app.use(compression())
app.use(xss())

// Prevent parameter pollution. look yt if confuse
app.use(
  hpp({
    whitelist: [
      // enter the query params here
    ],
  })
)

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
})
app.use('/api', limiter)

app.use(
  cors({
    origin: 'http://localhost:5173',
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
app.use('/api/v1', AuthRouter)
app.use('/api/v1', CourseRouter)
app.use('/api/v1', KhaltiRouter)
app.use('/api/v1', CommentRouter)
app.use('/api/v1', CartRouter)
app.use('/api/v1', LearningpathRouter)

app.all('*', (req, res, next) => {
  next(new ErrorHandler(`Can't find ${req.originalUrl} on this server!`, 404))
})

//middleware for error
app.use(ErrorHandle)

export default app
