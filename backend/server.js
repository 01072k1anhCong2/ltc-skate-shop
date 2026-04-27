import cors from 'cors';
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import aiRoutes from './routes/ai.js';

const port = process.env.PORT || 5000;

connectDB();

const app = express();

const allowedOrigins = [
  'https://ltc-skate-shop-m73au41lo-lam-thanh-congs-projects.vercel.app', 
  'https://ltc-skate-shop-git-main-lam-thanh-congs-projects.vercel.app',  
  'https://ltc-skate-shop.vercel.app' ,
  'http://localhost:3000',
  'https://studio.botpress.cloud',
  'https://botpress.cloud'
];


app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin) || origin.includes('botpress')) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy: Origin này không được phép truy cập.'));
    }
  },
  credentials: true,
}));

app.set('trust proxy', 1);// server se tin tuong proxy hon do

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/ai', aiRoutes);

app.get('/api/config/paypal', (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use('/uploads', express.static('/var/data/uploads'));
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  const __dirname = path.resolve();
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, '0.0.0.0', () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);