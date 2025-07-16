import React, { useState } from "react";
import { AppContext, useAppContext } from "../context/AppContext";
import axios from "../api/axios";
import toast from "react-hot-toast";
const Account = () => {
	const { loggedUser, setLoggedUser } = useAppContext();

	const [updatedUserInfo, setUpdatedUserInfo] = useState({
		username:"",
		oldPassword:"",
		newPassword:""
	})

	const handleUsernameSubmit = async(e)=>{
		e.preventDefault();
		try {
			
			const response = await axios.patch("/users/username-edit", {username:updatedUserInfo.username.trim()});
			
			if(response.success === true){
				console.log(response?.data?.message)
				toast.success(response?.data?.message||"test");
			}
		} catch (error) {
			toast.error(error.response?.data?.error);
		}

	}

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

				<div className="p-5 flex-col flex gap-5 sm:text-xl  ">
					<div className=" flex items-center justify-end">
						<label
							className="font-semibold "
							htmlFor="userEmail"
						>
							Email:
						</label>
						<input
							className="border-2 border-font-primary rounded px-3 py-2 sm:w-85"
							readOnly
							type="email"
							name="email"
							
							value={loggedUser.email}
							id="userEmail"
						/>
					</div>

					<div className=" flex items-center justify-end">
						<label
							className="font-semibold "
							htmlFor="userUsername"
						>
							Username:
						</label>
						<input
							className="border-2 border-font-primary rounded px-3 py-2 sm:w-85"
							readOnly
							type="text"
							name="username"
							value={loggedUser.username}
							id="userUsername"
						/>
					</div>
				</div>
			</div>

			<div className="p-5 gap-10 m-5 border-2 border-font-primary rounded-xl flex flex-col text-center  items-center justify-center">
				<h1 className="w-fit text-5xl font-medium ">Edit Your Info:</h1>

				<div className="p-5 flex-col flex gap-5 sm:text-xl  ">
					<form onSubmit={handleUsernameSubmit} className=" flex items-center justify-end">
						<label
							className="font-semibold "
							htmlFor="userUsername"
						>
							Username:
						</label>
						<input
							className="border-2 border-font-primary rounded px-3 py-2 w-80"
							
							type="text"
							name="username"
							
							value={updatedUserInfo.username}
							onChange={(e)=>setUpdatedUserInfo({username:e.target.value})}
							id="userUsername"
						/>
						<button className="ml-10 border-2 border-font-primary rounded-2xl px-2 py-1 hover:scale-110 hover:bg-primary hover:font-medium cursor-pointer active:text-white">Change</button>
					</form>

				</div>
				
			</div>
		</>
	);
};

export default Account;
