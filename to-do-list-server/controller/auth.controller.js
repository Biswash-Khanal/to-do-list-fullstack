import mongoose from "mongoose";
import { GOOGLE_CLIENT_ID, JWT_SECRET, NODE_ENV } from "../config/env.js";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";
import { OAuth2Client } from "google-auth-library";


const client = new OAuth2Client(GOOGLE_CLIENT_ID);

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
		const { username, password, rememberMe = false } = req.body;
		if (!username || !password) {
			throw new AppError("Username and password are required", 400);
		}

		const existingUser = await User.findOne({ username });

		if (!existingUser) {
			throw new AppError("User not found, Please register first", 404);
		}

		if(existingUser.isGoogleAccount){
			throw new AppError("This username is registered with a google account, please use the google sign in option!")
		}

		const isPasswordCorrect = await bcrypt.compare(
			password,
			existingUser.password
		);

		if (!isPasswordCorrect) {
			throw new AppError("Incorrect password", 401);
		}

		//jwt token generation
		//cond1 if remember me was selected
		const tokenExpiry = rememberMe ? "7d" : "3h";
		const token = jwt.sign({ tokenId: existingUser._id }, JWT_SECRET, {
			expiresIn: tokenExpiry,
		});
		if (rememberMe) {
			res.cookie("token", token, {
				httpOnly: true,
				secure: NODE_ENV === "production",
				sameSite: "strict",
				maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
			});
		} else {
			res.cookie("token", token, {
				httpOnly: true,
				secure: NODE_ENV === "production",
				sameSite: "strict",
			});
		}

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

export const googleLoginUser = async (req, res, next) => {
	try {
		const { token, rememberMe } = req.body;

		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: GOOGLE_CLIENT_ID,
		});

		const payload = ticket.getPayload();
		const { email, name } = payload;

		let user = await User.findOne({ email });

		if (user && !user.isGoogleAccount) {
			throw new AppError(
				"This email has been used to setup a local account. Please log in through it instead!",
				400
			);
		}
		if (!user) {
			let baseUsername = name.toLowerCase().replace(/\s+/g, "_");
			let username = baseUsername;
			let counter = 1;

			while (await User.exists({ username })) {
				username = `${baseUsername}_${counter++}`;
			}

			user = await User.create({
				username,
				email,
				isGoogleAccount: true,
			});

			user = await User.findOne({ email });
		}

		const tokenExpiry = rememberMe ? "7d" : "3h";
		const jwttoken = jwt.sign({ tokenId: user._id }, JWT_SECRET, {
			expiresIn: tokenExpiry,
		});

		if (rememberMe) {
			res.cookie("token", jwttoken, {
				httpOnly: true,
				secure: NODE_ENV === "production",
				sameSite: "strict",
				maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
			});
		} else {
			res.cookie("token", jwttoken, {
				httpOnly: true,
				secure: NODE_ENV === "production",
				sameSite: "strict",
			});
		}

		return res.status(200).json({
			success: true,
			message: "User logged in successfully",
			user: {
				id: user._id,
				username: user.username,
				email: user.email,
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

export const verifyUser = async (req, res, next) => {
	try {
		const userId = req.authorizedId;
		const user = await User.findById(userId).select("-password");
		if (user) {
			res.status(200).json({
				success: true,
				user: user,
			});
		} else {
			throw new AppError(
				"Token expired, or some other error occured :(. \nPlease Sign-In again",
				409
			);
		}
	} catch (error) {
		next(error);
	}
};
