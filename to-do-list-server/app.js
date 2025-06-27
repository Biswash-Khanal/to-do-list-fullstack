import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";

import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import todoRoutes from "./routes/todo.route.js";
import { PORT } from "./config/env.js";




const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
	res.send("Welcome to the To-Do List API");
});

app.listen(PORT || 5000, () => {
	console.log(`Server is running on http://localhost:${PORT || 5000}`);
});
