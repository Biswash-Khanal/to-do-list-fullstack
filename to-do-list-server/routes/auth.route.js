import express from "express";
import registerUser from "../controller/auth.controller.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerUser
);

authRoutes.post("/login", loginUser
);



authRoutes.post("/logout", (req, res) => {
	// Handle user logout
	// Logic for user logout goes here
	res.json({ message: "User logged out successfully" });
});

export default authRoutes;
