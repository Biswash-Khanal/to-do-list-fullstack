import mongoose from "mongoose";
import { JWT_SECRET, NODE_ENV } from "../config/env.js";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";

export const registerUser = async (req, res, next) => {
	try {
		const { username, email, password } = req.body;
		if (!username || !email || !password) {
			const error = new Error("All fields are required");
			error.statusCode = 400;
			throw error;
		}

		if (await User.findOne({ email })) {
			return res
				.status(400)
				.json({ message: "Account with this email already exists" });
		}

		if (await User.findOne({ username })) {
			
			return res.status(400).json({ message: "Username already exists" });
		}

		if (password.length < 6) {
			return res
				.status(400)
				.json({ message: "Password must be at least 6 characters long" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = new User({
			username: username,
			email: email,
			password: hashedPassword,
		});

		await newUser.save();
		res.status(201).json({
			message: "User registered successfully",
		});
	} catch (error) {
		console.error("Error registering user:", error);
		res.status(500).json({
			success: false,
			message: error.message || "Internal Server Error",
		});
	}
};

export const loginUser = async (req, res) => {
	const loginSession = await mongoose.startSession();
	loginSession.startTransaction();

	try {
		const { username, password } = req.body;
		if (!username || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const existingUser = await User.findOne({ username });

		if (!existingUser) {
			return res
				.status(400)
				.json({ message: "Account with this username does not exist" });
		}

		const isPasswordCorrect = await bcrypt.compare(
			password,
			existingUser.password
		);
		if (!isPasswordCorrect) {
			return res.status(400).json({
				message: "Invalid password, Please enter the correct Password",
			});
		}

		//jwt token generation
		const token = jwt.sign({ tokenId: existingUser._id }, JWT_SECRET, {
			expiresIn: "1h",
		});

		res.cookie("token", token, {
			httpOnly: true,
			secure: NODE_ENV === "production",
			sameSite: "strict",
			maxAge: 3600000, // 1 hour
		});

		loginSession.commitTransaction();
		loginSession.endSession();

		res.status(200).json({
			message: "User logged in successfully",
			user: {
				id: existingUser._id,
				username: existingUser.username,
				email: existingUser.email,
				token: token,
			},
		});
	} catch (error) {
		console.error("Error logging in user:", error);
		res.status(500).json({
			success: false,
			message: error.message || "Internal Server Error",
		});
		loginSession.abortTransaction();
		loginSession.endSession();
	}
};

export const logoutUser = async (req, res) => {
	try {
		res.clearCookie("token");
		res.status(200).json({ message: "User logged out successfully" });
	} catch (error) {
		console.error("Error logging out user:", error);
		res.status(500).json({
			success: false,
			message: error.message || "Internal Server Error",
		});
	}
};
