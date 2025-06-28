import { JWT_SECRET } from "../config/env.js";
import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";

const authMiddleware = (req, res, next) => {
	try {
		const token = req.cookies.token;
		if (!token) {
			throw new AppError("Authentication token is missing", 401);
		}
        // Verify the token using the secret key
		const decoded = jwt.verify(token, JWT_SECRET);
        req.authorizedId = decoded.tokenId;
        next();

	} catch (error) {
        next(error);
    }
};

export default authMiddleware;
