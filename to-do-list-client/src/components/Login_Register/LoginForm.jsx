import { useState } from "react";
import AuthForm from "./AuthForm";
import InputField from "./InputField";
import toast from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";
import axios from "../../api/axios";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onClose, onSwitch, onSubmit }) => {

	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		rememberMe: false,
	});

	const { setShowLogin, setIsLoggedIn, setLoggedUser } =
		useAppContext();

	const googleLoginSuccess = async (credentialResponse) => {
		try {
			const idToken = credentialResponse.credential; // This is the JWT ID token

			const response = await axios.post("/auth/login-google", {
				token: idToken,
				rememberMe: formData.rememberMe,
			});

			if (response.data.success) {
				console.log("User logged in:", response.data.user);
				toast.success(response.data.message);
				setIsLoggedIn(true);
				setLoggedUser(response.data?.user);
				navigate("/todos");
				setShowLogin(false);
			} else {
				toast.error(response.data.error || "Login failed");
			}
		} catch (error) {
			console.error(
				"Google login failed:",
				error.response?.data || error.message
			);
			toast.error("Google login failed");
		}
	};

	const googleLoginError = () => {
		console.error("Google login was cancelled or failed.");
		// You can show a toast or other UI feedback here if you want
	};

	const handleInputChange = (e) => {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			onSubmit(formData);
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<AuthForm
			title="Sign in"
			subtitle="Welcome back! Please sign in to continue"
			onClose={onClose}
			switchText="Don’t have an account?"
			onSwitch={onSwitch}
		>
			<GoogleLogin
				onSuccess={googleLoginSuccess}
				onError={googleLoginError}
			/>
			<form
				onSubmit={handleSubmit}
				className="md:w-96 w-80 flex flex-col items-center justify-center"
			>
				<div className="flex items-center gap-4 w-full my-5">
					<div className="w-full h-px bg-black"></div>
					<p className="w-full text-nowrap text-sm text-font-primary/90">
						or sign in with email
					</p>
					<div className="w-full h-px bg-black"></div>
				</div>

				<InputField
					type="text"
					placeholder="UserName"
					name="username"
					value={formData.username}
					onChange={handleInputChange}
				/>
				<InputField
					type="password"
					placeholder="Password"
					name="password"
					value={formData.password}
					onChange={handleInputChange}
				/>

				<div className="w-full flex items-center justify-between mt-8 text-font-primary/80">
					<div className="flex items-center gap-2 ">
						<input
							className="appearance-none w-5 h-5 border-2 border-[#7B3F00] rounded-md checked:bg-[#7B3F00] checked:border-[#7B3F00] focus:outline-none cursor-pointer"
							type="checkbox"
							id="checkbox"
							checked={formData.rememberMe}
							name="rememberMe"
							onChange={(e) =>
								setFormData((prev) => {
									return {
										...prev,

										[e.target.name]: e.target.checked, //
									};
								})
							}
						/>
						<label
							className="text-sm cursor-pointer"
							htmlFor="checkbox"
						>
							Remember me
						</label>
					</div>
					<a
						className="text-sm underline"
						href="#"
					>
						Forgot password?
					</a>
				</div>

				<button
					type="submit"
					className="mt-8 w-full h-11 rounded-full text-font-primary bg-primary border-font-primary border-1 hover:opacity-90 transition-opacity cursor-pointer hover:bg-font-primary hover:text-primary"
				>
					Login
				</button>
			</form>
		</AuthForm>
	);
};

export default LoginForm;
