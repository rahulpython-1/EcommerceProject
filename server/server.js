import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
configDotenv();
const app = express();
app.use(
	cors({
		origin: "http://localhost:5173/",
		methods: ["GET", "POST", "DELETE", "PUT"],
		allowedHeaders: [
			"Content-Type",
			"Authorization",
			"Cache-Control",
			"Expires",
			"Pragma",
		],
		credentials: true,
	})
);

app.use(cookieParser());
app.use(express.json())
// create a database connection
mongoose
	.connect(
		"mongodb+srv://rahulkrthakur003:kTzxU1jLlJUnV8DV@ecommerce.2xwfnll.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce"
	)
	.then(() => {
		console.log("MongoDB Connect");
	})
	.catch((err) => {
		console.log("Error In Database Connection", err);
	});

app.listen(process.env.PORT, () => {
	console.log(`Server Is running At - ${process.env.PORT}`);
});
