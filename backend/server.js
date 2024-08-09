import path from "path";
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.rotues.js"
import userRoutes from "./routes/user.rotues.js"
import postRoutes from "./routes/post.rotues.js"
import notificationRoutes from "./routes/notification.rotues.js"
import connectMongoDB from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser';
import {v2 as cloudinary} from "cloudinary";


dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve()

app.use(express.json({limit: "15mb"}));
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

console.log(process.env.MONGO_URI);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notifications", notificationRoutes);


if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    connectMongoDB();
})