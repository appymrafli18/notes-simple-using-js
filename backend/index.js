import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import CatatanRoutes from './routes/CatatanRoutes.js';
// import Catatan from './models/CatatanModels.js';
dotenv.config();
const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
);
app.use(CatatanRoutes);

app.listen(port, () => console.log('Server Running'));
