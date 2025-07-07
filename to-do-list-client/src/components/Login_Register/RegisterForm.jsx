import { useState } from "react";
import AuthForm from "./AuthForm";
import InputField from "./InputField";

const RegisterForm = ({ onClose, onSwitch, onSubmit }) => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleInputChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
	};

	return (
		<AuthForm
			title="Register User"
			subtitle="Please register to continue!"
			onClose={onClose}
			switchText="Already have an account?"
			onSwitch={onSwitch}
		>
      <form onSubmit={handleSubmit} className="md:w-96 w-80 flex flex-col items-center justify-center">
			<InputField
				type="text"
				placeholder="Username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
			/>
			<InputField
				type="email"
				placeholder="Email id"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
			/>
			<InputField
				type="password"
				placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
			/>

			<button
				type="submit"
				className=" mt-8 w-full h-11 rounded-full text-font-primary bg-primary border-font-primary border-1 hover:opacity-90 transition-opacity cursor-pointer hover:bg-font-primary hover:text-primary"
				onClick={onSubmit}
			>
				Register
			</button>
      </form>

			<div className="flex items-center gap-4 w-full my-5">
				<div className="w-full h-px bg-black"></div>
				<p className="w-full text-nowrap text-sm text-font-primary/90">
					or Sign Up with Google Account
				</p>
				<div className="w-full h-px bg-black"></div>
			</div>
			<button
				type="button"
				className="border border-font-primary w-full mt-2 bg-primary flex items-center justify-center h-12 rounded-full cursor-pointer hover:bg-font-primary hover:text-primary transition-all"
			>
				<img
					src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
					alt="googleLogo"
				/>
			</button>
		</AuthForm>
	);
};

export default RegisterForm;
