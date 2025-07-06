import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const { setShowLogin, loginRegisterSwitch, setLoginRegisterSwitch, setIsLoggedIn } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    navigate("/");
  };

  return loginRegisterSwitch === "register" ? (
    <RegisterForm
      onClose={() => setShowLogin(false)}
      onSwitch={() => setLoginRegisterSwitch("login")}
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