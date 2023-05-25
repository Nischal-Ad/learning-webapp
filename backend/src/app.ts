import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import Error from '@Middleware/error'

//routes
import UserRouter from '@Routes/userRoute'
import bodyParser from 'body-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  cors({
    origin: 'http://localhost:5173', // Set the specific origin instead of the wildcard '*'
    credentials: true, // Enable sending cookies and other credentials
  })
)

app.use('/api/v1', UserRouter)

//middleware for error
app.use(Error)

export default app
