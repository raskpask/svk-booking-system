import express from 'express';
import dotenv from 'dotenv';
import healthRouter from './src/routes/health.routes';
import bookingRouter from './src/routes/booking.routes';
import userRouter from './src/routes/user.routes';


dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

// express.json()
app.use(express.json())

app.use('/health', healthRouter);
app.use('/booking', bookingRouter);
app.use('/user', userRouter);
app.use(healthRouter);


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});