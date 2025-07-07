import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import axios from "../../api/axios";

const Login = () => {
	const {
		setShowLogin,
		loginRegisterSwitch,
		setLoginRegisterSwitch,
		setIsLoggedIn,
	} = useAppContext();
	const navigate = useNavigate();

	const handleLogin = () => {
		setIsLoggedIn(true);
		setShowLogin(false);
		navigate("/");
	};
	const handleRegister = async ({data}) => {
		
    try {
      const res = await axios.post("/users/register", {
        email: data.email,
        username: data.username,
        password: data.password,
      });
      if(res.success === true){
        console.log("Registration successful:", res.data);
      }
      else{
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Registration failed:", error);
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
