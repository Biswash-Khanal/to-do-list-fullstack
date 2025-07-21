import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import axios from "../../api/axios";
import toast from "react-hot-toast";

const Login = () => {
	const {
		setShowLogin,
		loginRegisterSwitch,
		setLoginRegisterSwitch,
		setIsLoggedIn,
		setLoggedUser
	} = useAppContext();
	const navigate = useNavigate();

	const handleLogin = async (loginData) => {
		try {
			const res = await axios.post("/auth/login", loginData);

			if (res.data.success === true) {
				console.log("Logged in Successfully");
				toast.success(res.data.message);
				setIsLoggedIn(true);
				setLoggedUser(res.data?.user);
				navigate("/todos");
				setShowLogin(false);
			}
		} catch (error) {
			console.log(error)
			toast.error(error.response?.data?.error || "Something Went Wrong!");
			toast.error( "Something Went Wrong!");
		}
	};
	const handleRegister = async (registerData) => {
		try {
			const res = await axios.post("/auth/register", registerData);

			if (res.data.success === true) {
				console.log("Registration successful:", res.data);
				toast.success(res.data.message);
				navigate("/");
				setShowLogin(false);
				setLoginRegisterSwitch("login")
			}
			console.log(registerData);
		} catch (error) {
			toast.error(error.response?.data?.error || "Something Went Wrong!");
		}
	};

	return loginRegisterSwitch === "register" ? (
		<RegisterForm
			onClose={() => setShowLogin(false)}
			onSwitch={() => setLoginRegisterSwitch("login")}
			onSubmit={handleRegister}
		/>
	) : (
		<LoginForm
			onClose={() => setShowLogin(false)}
			onSwitch={() => setLoginRegisterSwitch("register")}
			onSubmit={handleLogin}
		/>
	);
};

export default Login;
