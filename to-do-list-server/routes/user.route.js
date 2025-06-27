import express from 'express';

const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
    // Handle fetching user details
    res.json({ message: "User details fetched successfully" });
});

export default userRoutes;