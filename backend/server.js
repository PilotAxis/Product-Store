// import mongoose from "mongoose";
import dotenv from "dotenv";
import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
// import Product from "./models/product.model.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/products", productRoutes)

app.listen(4000, () => {
    connectDB();
    console.log('Server started at http://localhost:'+ PORT);
});

