import express from 'express';
import dotenv from 'dotenv';
import healthRouter from './src/routes/health.routes';
import bookingRouter from './src/routes/booking.routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.use('/health', healthRouter);
app.use('/booking', bookingRouter);
app.use(healthRouter);


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});