import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
	const { setShowLogin, loginRegisterSwitch, setLoginRegisterSwitch, setIsLoggedIn } = useAppContext();
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLoggedIn(true);
        setShowLogin(false);
        navigate("/");  
    };

	if (loginRegisterSwitch === "register") {
		return (
			<div className="bg-primary/30 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-full max-w-xl border border-font-primary/40">
				<div className="flex  w-full">
					<button
						onClick={() => setShowLogin(false)}
						className="cursor-pointer absolute text-2xl text-font-primary"
					>
						X
					</button>

					<div className="w-full flex flex-col items-center justify-center ">
						<form className="md:w-96 w-80 flex flex-col items-center justify-center">
							<h2 className="text-4xl text-gray-900 font-medium">
								Register User
							</h2>
							<p className="text-sm text-font-primary mt-3">
								Welcome to PlanUp!
							</p>
                            <p className="text-sm text-font-primary mt-3">
								Please register to continue!
							</p>

							<div className="border border-font-primary flex items-center mt-6 w-full bg-transparent  h-12 rounded-full overflow-hidden pl-6 gap-2">
								<svg
									width="16"
									height="11"
									viewBox="4 4 20 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z"
										fill="#7B3F00"
									/>
									<path
										d="M5 19.5C5 15.9101 7.91015 13 11.5 13H12.5C16.0899 13 19 15.9101 19 19.5V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V19.5Z"
										fill="#7B3F00"
									/>
								</svg>
								<input
									type="text"
									placeholder="Username"
									className="bg-transparent text-font-secondary placeholder-font-secondary/50 outline-none text-sm w-full h-full"
									required
								/>
							</div>

							<div className="border border-font-primary flex items-center w-full bg-transparent  h-12 rounded-full overflow-hidden pl-6 gap-2 mt-6">
								<svg
									width="16"
									height="11"
									viewBox="0 0 16 11"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
										fill="#7B3F00"
									/>
								</svg>
								<input
									type="email"
									placeholder="Email id"
									className="bg-transparent text-font-secondary placeholder-font-secondary/50 outline-none text-sm w-full h-full"
									required
								/>
							</div>

							<div className="border border-font-primary flex items-center mt-6 w-full bg-transparent  h-12 rounded-full overflow-hidden pl-6 gap-2">
								<svg
									width="13"
									height="17"
									viewBox="0 0 13 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
										fill="#7B3F00"
									/>
								</svg>
								<input
									type="password"
									placeholder="Password"
									className="bg-transparent text-font-secondary placeholder-font-secondary/50 outline-none text-sm w-full h-full"
									required
								/>
							</div>

							

							<button
								type="submit"
								className=" mt-8 w-full h-11 rounded-full text-font-primary bg-primary border-font-primary border-1 hover:opacity-90 transition-opacity cursor-pointer hover:bg-font-primary hover:text-primary"
							>
								Register
							</button>

							<div className="flex items-center gap-4 w-full my-5">
								<div className="w-full h-px bg-black"></div>
								<p className="w-full text-nowrap text-sm text-font-primary/90">
									or Sign Up with Google Account
								</p>
								<div className="w-full h-px bg-black"></div>
							</div>
							<button
								type="button"
								className="border border-font-primary w-full mt-8 bg-primary flex items-center justify-center h-12 rounded-full cursor-pointer hover:bg-font-primary hover:text-primary transition-all"
							>
								<img
									src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
									alt="googleLogo"
								/>
							</button>

							<p className="text-font-secondary text-sm mt-4">
								Already have an account?{" "}
								<a
									className="text-font-primary hover:underline"
									href="#"
                                    onClick={() => setLoginRegisterSwitch("login")}
								>
									Sign In
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		);
	} else if (loginRegisterSwitch === "login") {
		return (
			<div className="bg-primary/30 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-full max-w-xl border border-font-primary/40">
				<div className="flex  w-full">
					<button
						onClick={() => setShowLogin(false)}
						className="cursor-pointer absolute text-2xl text-font-primary"
					>
						X
					</button>

					<div className="w-full flex flex-col items-center justify-center ">
						<form className="md:w-96 w-80 flex flex-col items-center justify-center">
							<h2 className="text-4xl text-gray-900 font-medium">Sign in</h2>
							<p className="text-sm text-font-primary mt-3">
								Welcome back! Please sign in to continue
							</p>

							<button
								type="button"
								className="border border-font-primary w-full mt-8 bg-primary flex items-center justify-center h-12 rounded-full cursor-pointer hover:bg-font-primary hover:text-primary transition-all"
							>
								<img
									src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
									alt="googleLogo"
								/>
							</button>

							<div className="flex items-center gap-4 w-full my-5">
								<div className="w-full h-px bg-black"></div>
								<p className="w-full text-nowrap text-sm text-font-primary/90">
									or sign in with email
								</p>
								<div className="w-full h-px bg-black"></div>
							</div>

							<div className="border border-font-primary flex items-center w-full bg-transparent  h-12 rounded-full overflow-hidden pl-6 gap-2">
								<svg
									width="16"
									height="11"
									viewBox="0 0 16 11"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
										fill="#7B3F00"
									/>
								</svg>
								<input
									type="email"
									placeholder="Email id"
									className="bg-transparent text-font-secondary placeholder-font-secondary/50 outline-none text-sm w-full h-full"
									required
								/>
							</div>

							<div className="border border-font-primary flex items-center mt-6 w-full bg-transparent  h-12 rounded-full overflow-hidden pl-6 gap-2">
								<svg
									width="13"
									height="17"
									viewBox="0 0 13 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
										fill="#7B3F00"
									/>
								</svg>
								<input
									type="password"
									placeholder="Password"
									className="bg-transparent text-font-secondary placeholder-font-secondary/50 outline-none text-sm w-full h-full"
									required
								/>
							</div>

							<div className="w-full flex items-center justify-between mt-8 text-font-primary/80">
								<div className="flex items-center gap-2 ">
									<input
										className="appearance-none w-5 h-5 border-2 border-[#7B3F00] rounded-md checked:bg-[#7B3F00] checked:border-[#7B3F00] focus:outline-none cursor-pointer"
										type="checkbox"
										id="checkbox"
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
								className="mt-8 w-full h-11 rounded-full text-font-primary bg-primary border-primary border-1 hover:opacity-90 transition-opacity cursor-pointer hover:bg-font-primary hover:text-primary"
                                onClick={()=>{handleLogin();}}
                                href="/home"
                                
							>
								Login
							</button>
							<p className="text-font-secondary text-sm mt-4">
								Don’t have an account?{" "}
								<a
									className="text-font-primary hover:underline cursor-pointer"
									
                                    onClick={()=>setLoginRegisterSwitch("register")}
								>
									Sign up
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		);
	}
};

export default Login;
