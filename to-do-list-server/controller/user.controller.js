import mongoose from "mongoose";
import User from "../model/user.model.js";
import Todo from "../model/todo.model.js";
import AppError from "../utils/AppError.js";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcryptjs";

export const getUserDetails = async (req, res, next) => {
	try {
		const user = req.authorizedId;
		if (!user) {
			throw new AppError("Unauthorized to access", 401);
		}

		const fetchedUser = await User.findById(user);

		if (!fetchedUser) {
			throw new AppError("No current user exists in database", 404);
		}

		return res.status(200).json({ success: true, user: fetchedUser });
	} catch (error) {
		next(error);
	}
};

export const editUserPassword = async (req, res, next) => {
	const editUserSession = await mongoose.startSession();
	editUserSession.startTransaction();
	try {
		const user = req.authorizedId;
		if (!user) {
			throw new AppError("Unauthorized to access", 401);
		}

		const fetchedUser = await User.findById(user);
		if (!fetchedUser) {
			throw new AppError("No current user exists in database", 404);
		}

		const {oldPassword, newPassword } = req.body;

		const passwordMatch = await bcrypt.compare(
			oldPassword,
			fetchedUser.password
		);
		if (!passwordMatch) {
			throw new AppError("Old password is incorrect", 400);
		}

		if(oldPassword === newPassword){
			throw new AppError("New Password cannot be the same as old one!")
		}

		if (newPassword.length < 6) {
			throw new AppError(
				"New password must be at least 6 characters long",
				400
			);
		}

		const hashedPassword = await bcrypt.hash(newPassword, 10);


		fetchedUser.password = hashedPassword;

		await fetchedUser.save();
		await editUserSession.commitTransaction();
		editUserSession.endSession();

		// Logout the user (by clearing token cookie)
		res.clearCookie("token");

		// Respond with success and logout notice
		res.status(200).json({
			success:true,
			message: "User updated successfully. Please log in again.",
		});
	} catch (error) {
		await editUserSession.abortTransaction();
		editUserSession.endSession();
		next(error);
	}
};

export const editUserName = async (req, res, next) => {
	const editUserSession = await mongoose.startSession();
	editUserSession.startTransaction();
	try {
		const user = req.authorizedId;
		if (!user) {
			throw new AppError("Unauthorized to access", 401);
		}

		const fetchedUser = await User.findById(user);
		if (!fetchedUser) {
			throw new AppError("No current user exists in database", 404);
		}

		const { username} = req.body;

		if (!username?.trim()) {
			throw new AppError("Username is required", 400);
		}


		if (username.trim() === fetchedUser.username) {
			throw new AppError("Cannot change the username to current username", 400);
		}
		const existingUser = await User.findOne({ username: username.trim() });
		if (existingUser && existingUser._id.toString() !== user) {
			throw new AppError("Account Username is already tsaken", 400);
		}

		
		fetchedUser.username = username.trim();


		await fetchedUser.save();
		await editUserSession.commitTransaction();
		editUserSession.endSession();

		// Logout the user (by clearing token cookie)
		res.clearCookie("token");

		console.log("User updated successfully. Please log in again.")
		// Respond with success and logout notice
		res.status(200).json({
			success:true,
			message: "User updated successfully. Please log in again.",
		});
	} catch (error) {
		await editUserSession.abortTransaction();
		editUserSession.endSession();
		next(error);
	}
};

export const deleteUser = async (req, res, next) => {
	const deleteUserSession = await mongoose.startSession();
	deleteUserSession.startTransaction();
	try {
		const user = req.authorizedId;
		if (!user) {
			throw new AppError("Unauthorized to access", 401);
		}

		const fetchedUser = await User.findById(user);
		if (!fetchedUser) {
			throw new AppError("No current user exists in database", 404);
		}

		await User.findByIdAndDelete(user);
		await Todo.deleteMany({user})
		await deleteUserSession.commitTransaction();
		deleteUserSession.endSession();

		// Logout the user (by clearing token cookie)
		res.clearCookie("token");

		// Respond with success and logout notice
		res.status(200).json({
			success:true,
			message: "User deleted successfully.",
		});
	} catch (error) {
		await deleteUserSession.abortTransaction();
		deleteUserSession.endSession();
		next(error);
	}
};
