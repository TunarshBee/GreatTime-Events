
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import hallRoutes from './routes/halls';
import bookingRoutes from './routes/bookings';
import authRoutes from './routes/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('GreatTime Events API is running!');
});

app.use('/api/halls', hallRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
