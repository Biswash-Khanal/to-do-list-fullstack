import mongoose from "mongoose";
import { JWT_SECRET, NODE_ENV } from "../config/env.js";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";

export const registerUser = async (req, res, next) => {
	const registerSession = await mongoose.startSession();
	registerSession.startTransaction();
	try {
		const { username, email, password } = req.body;
		if (!username || !email || !password) {
			throw new AppError("All fields are required", 400);
		}

		if (await User.findOne({ email })) {
			throw new AppError("Account with this Email already exists", 405);
		}

		if (await User.findOne({ username })) {
			throw new AppError("Account Username is already taken", 400);
		}

		if (password.length < 6) {
			throw new AppError("Password must be at least 6 characters long", 400);
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = new User({
			username: username,
			email: email,
			password: hashedPassword,
		});

		await newUser.save({ session: registerSession });
		await registerSession.commitTransaction();
		registerSession.endSession();

		return res.status(201).json({
			success: true,
			message: "User registered successfully",
			user: {
				id: newUser._id,
				username: newUser.username,
				email: newUser.email,
			},
		});
	} catch (error) {
		await registerSession.abortTransaction();
		registerSession.endSession();
		console.error("Error registering user:", error);
		next(error);
	}
};

export const loginUser = async (req, res, next) => {
	try {
		const { username, password } = req.body;
		if (!username || !password) {
			throw new AppError("Username and password are required", 400);
		}

		const existingUser = await User.findOne({ username });

		if (!existingUser) {
			throw new AppError("User not found, Please register first", 404);
		}

		const isPasswordCorrect = await bcrypt.compare(
			password,
			existingUser.password
		);

		if (!isPasswordCorrect) {
			throw new AppError("Incorrect password", 401);
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

		return res.status(200).json({
			success: true,
			message: "User logged in successfully",
			user: {
				id: existingUser._id,
				username: existingUser.username,
				email: existingUser.email,
			},
		});
	} catch (error) {
		console.error("Error logging in user:", error);
		next(error);
	}
};

export const logoutUser = async (req, res, next) => {
	try {
		res.clearCookie("token");

		return res
			.status(200)
			.json({ success: true, message: "User logged out successfully" });
	} catch (error) {
		next(error);
	}
};


export const verifyUser = async(req, res, next)=>{
		try {
			const userId = req.authorizedId;
			
		} catch (error) {
			
		}
}
