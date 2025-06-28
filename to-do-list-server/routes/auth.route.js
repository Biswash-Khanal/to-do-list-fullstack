import express from "express";
import registerUser from "../controller/auth.controller.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerUser
);

authRoutes.post("/login", (req, res) => {
	// Handle user login
	const { username, password } = req.body;
	// Logic for user authentication goes here
	res.json({ message: "User logged in successfully", username });
});



authRoutes.post("/logout", (req, res) => {
	// Handle user logout
	// Logic for user logout goes here
	res.json({ message: "User logged out successfully" });
});

export default authRoutes;
