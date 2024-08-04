import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.rotues.js"
import connectMongoDB from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

console.log(process.env.MONGO_URI);

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    connectMongoDB();
})