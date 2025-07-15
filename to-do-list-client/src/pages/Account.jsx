import React from "react";
import { AppContext, useAppContext } from "../context/AppContext";
const Account = () => {
	const { loggedUser, setLoggedUser } = useAppContext();

	return (
		<>
			<div className="mt-20 w-full">
				<h1 className="text-center text-2xl">Welcome {loggedUser.username}</h1>
				<p className="text-center">
					Manage your account settings and preferences here.
				</p>
			</div>

			<div className="p-5 gap-5 m-5 border-2 border-font-primary rounded-xl flex flex-col text-center  items-center justify-center">
				<h1 className="w-fit text-5xl ">Account Information</h1>

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
				<h1 className="w-fit text-5xl ">Account Information</h1>

				<div className="p-5 flex-col flex gap-5 sm:text-xl  ">
					<div className=" flex items-center justify-end">
						<label
							className="font-semibold "
							htmlFor="userEmail"
						>
							Email:
						</label>
						<input
							className="border-2 border-font-primary rounded px-3 py-2 w-80"
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
						className="border-2 border-font-primary rounded px-3 py-2 w-80"
						readOnly
						type="text"
						name="username"
						value={loggedUser.username}
						id="userUsername"
					/>
          </div>
				</div>

        
			</div>
		</>
	);
};

export default Account;
