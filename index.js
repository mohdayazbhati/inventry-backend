import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
//  import { Product } from './Model/productModel.js';
import cors from 'cors';
import productsRoute from './routes/productsRoute.js';


const app = express();

app.use(express.json());

app.use(cors());

// Create
app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('Welcome To Inventry');
});

app.use('/products', productsRoute);



mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });