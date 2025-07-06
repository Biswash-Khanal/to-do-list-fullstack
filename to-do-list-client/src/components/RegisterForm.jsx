import AuthForm from "./AuthForm";
import InputField from "./InputField";

const RegisterForm = ({ onClose, onSwitch }) => (
  <AuthForm
    title="Register User"
    subtitle="Please register to continue!"
    onClose={onClose}
    switchText="Already have an account?"
    onSwitch={onSwitch}
  >
    <InputField type="text" placeholder="Username" />
    <InputField type="email" placeholder="Email id" />
    <InputField type="password" placeholder="Password" />

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
      className="border border-font-primary w-full mt-2 bg-primary flex items-center justify-center h-12 rounded-full cursor-pointer hover:bg-font-primary hover:text-primary transition-all"
    >
      <img
        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
        alt="googleLogo"
      />
    </button>
  </AuthForm>
);

export default RegisterForm;