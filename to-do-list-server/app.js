import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";

import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import todoRoutes from "./routes/todo.route.js";
import { CLIENT_URL, PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";




const app = express();

app.use(
	cors({
		origin: CLIENT_URL,
		credentials: true,
	})
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
	res.send("Welcome to the To-Do List API");
});

app.use(errorMiddleware);

app.listen(PORT || 5000, async () => {
	await  connectToDatabase();
    console.log(`Server is running on http://localhost:${PORT || 5000}`);
   
});
