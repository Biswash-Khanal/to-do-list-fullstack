import User from "../model/user.model.js";
import bcrypt from "bcryptjs";


const registerUser = async (req, res) => {
	try {
		const { username, email, password } = req.body;
		if (!username || !email || !password) {
			return res.status(400).json({ message: "All fields are required" });
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
			username:username,
			email:email,
			password:hashedPassword,
		});

		await newUser.save();
		res.status(201).json({
			message: "User registered successfully",
		});
	} catch (error) {
		console.error("Error registering user:", error);
		res
			.status(500)
			.json({
				success: false,
				message: error.message || "Internal Server Error",
			});


	}
};

export default registerUser;
