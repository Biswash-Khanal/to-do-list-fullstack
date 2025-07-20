import React, { useState } from "react";
import { AppContext, useAppContext } from "../context/AppContext";
import axios from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { changeUserDetails, viewUserDetails } from "../assets/assets";

const Account = () => {
	const navigate = useNavigate();

	const { loggedUser } = useAppContext();

	const [updatedUserInfo, setUpdatedUserInfo] = useState({
		username: "",
		oldPassword: "",
		newPassword: "",
		confirmPassword: "",
	});

	const handlePasswordSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.patch("/users/password-edit", {
				oldPassword: updatedUserInfo.oldPassword.trim(),
				newPassword: updatedUserInfo.newPassword.trim(),
			});

			if (response.data.success === true) {
				toast.success(
					response.data.message + "\n\n Page will refresh in few seconds!"
				);

				setTimeout(() => {
					navigate("/");
					window.location.reload();
				}, 2000);
			}
		} catch (error) {
			toast.error(error.response?.data?.error || "Some Error Occured");
		}
	};

	const handleUsernameSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.patch("/users/username-edit", {
				username: updatedUserInfo.username.trim(),
			});

			if (response.data.success === true) {
				toast.success(
					response.data.message + "\n\n Page will refresh in few seconds!"
				);

				setTimeout(() => {
					navigate("/");
					window.location.reload();
				}, 2000);
			}
		} catch (error) {
			toast.error(error.response?.data?.error || "Some Error Occured");
		}
	};

	return (
		<>
			<div className="mt-20 w-full">
				<h1 className="text-center text-2xl">Welcome {loggedUser.username}</h1>
				<p className="text-center">
					Manage your account settings and preferences here.
				</p>
			</div>

			<div className="p-5 gap-5 m-5 border-2 border-font-primary rounded-xl flex flex-col text-center  items-center justify-center">
				<h1 className="w-fit text-5xl font-medium">Account Information</h1>
				<form
					
					className="flex flex-col gap-5 items-center w-full max-w-xl sm:text-xl"
				>
					{viewUserDetails.map(({ label, name }) => (
						<div
							key={name}
							className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full"
						>
							<label
								htmlFor={name}
								className="sm:w-40 font-semibold text-left sm:text-right"
							>
								{label}
							</label>

							<input
								
								name={name}
								type="text"
								className="border-2 border-font-primary rounded px-3 py-2 w-full sm:w-100"
								value={loggedUser[`${name}`]}
								readOnly
							/>
						</div>
					))}
				</form>
			</div>

			<div className="p-5 gap-10 m-5 border-2 border-font-primary rounded-xl flex flex-col text-center items-center justify-center">
				<h1 className="w-fit text-3xl sm:text-5xl font-medium">
					Edit Your Info:
				</h1>

				<div className="w-full flex items-center justify-center">
					<div className="flex-grow border-t border-font-primary"></div>
					<span className="mx-4 text-font-primary font-medium">
						Change your username:
					</span>
					<div className="flex-grow border-t border-font-primary"></div>
				</div>
				{/* Username Form */}
				<form
					onSubmit={handleUsernameSubmit}
					className="flex flex-col gap-5 items-center w-full max-w-xl"
				>
					<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full">
						<label
							htmlFor="username"
							className="sm:w-40 font-semibold text-left sm:text-right"
						>
							Username:
						</label>

						<div className="flex flex-col sm:flex-row items-center w-full gap-2">
							<input
								id="username"
								name="username"
								type="text"
								placeholder="Enter new username"
								className="border-2 border-font-primary rounded px-3 py-2 w-full sm:w-80"
								value={updatedUserInfo.username}
								onChange={(e) =>
									setUpdatedUserInfo((prev) => ({
										...prev,
										username: e.target.value,
									}))
								}
							/>

							<button
								type="submit"
								className="border-2 border-font-primary rounded-2xl px-4 py-2 hover:scale-110 hover:bg-primary hover:font-medium cursor-pointer active:text-white sm:ml-4"
							>
								Change
							</button>
						</div>
					</div>
				</form>

				<div className="w-full flex items-center justify-center">
					<div className="flex-grow border-t border-font-primary"></div>
					<span className="mx-4 text-font-primary font-medium">
						OR, change the password:
					</span>
					<div className="flex-grow border-t border-font-primary"></div>
				</div>

				{/* Password Form */}
				<form
					onSubmit={handlePasswordSubmit}
					className="flex flex-col gap-5 items-center w-full max-w-xl"
				>
					{changeUserDetails.map(({ label, name, placeholder }, idx, arr) => (
						<div
							key={name}
							className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full"
						>
							<label
								htmlFor={name}
								className="sm:w-40 font-semibold text-left sm:text-right"
							>
								{label}
							</label>

							<div className="flex flex-col sm:flex-row items-center w-full gap-2">
								<input
									id={name}
									name={name}
									type="password"
									placeholder={placeholder}
									className="border-2 border-font-primary rounded px-3 py-2 w-full sm:w-80"
									value={updatedUserInfo[name] || ""}
									onChange={(e) =>
										setUpdatedUserInfo((prev) => ({
											...prev,
											[name]: e.target.value,
										}))
									}
								/>

								{/* Only show the "Change" button beside the last field */}
								{idx === arr.length - 1 && (
									<button
										type="submit"
										className="border-2 border-font-primary rounded-2xl px-4 py-2 hover:scale-110 hover:bg-primary hover:font-medium cursor-pointer active:text-white sm:ml-4"
									>
										Change
									</button>
								)}
							</div>
						</div>
					))}
				</form>
			</div>
		</>
	);
};

export default Account;
