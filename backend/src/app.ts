import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import Error from '@Middleware/error';

//routes
import UserRouter from '@Routes/userRoute';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: '*',
  })
);

app.use('/api/v1', UserRouter);

//middleware for error
app.use(Error);

export default app;
