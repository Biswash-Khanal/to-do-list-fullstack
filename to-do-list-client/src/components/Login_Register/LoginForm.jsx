import AuthForm from "./AuthForm";
import InputField from "./InputField";

const LoginForm = ({ onClose, onSwitch, onSubmit }) => (
  <AuthForm
    title="Sign in"
    subtitle="Welcome back! Please sign in to continue"
    onClose={onClose}
    switchText="Don’t have an account?"
    onSwitch={onSwitch}
  >
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

    <InputField type="email" placeholder="Email id" />
    <InputField type="password" placeholder="Password" />

    <div className="w-full flex items-center justify-between mt-8 text-font-primary/80">
      <div className="flex items-center gap-2 ">
        <input
          className="appearance-none w-5 h-5 border-2 border-[#7B3F00] rounded-md checked:bg-[#7B3F00] checked:border-[#7B3F00] focus:outline-none cursor-pointer"
          type="checkbox"
          id="checkbox"
        />
        <label className="text-sm cursor-pointer" htmlFor="checkbox">
          Remember me
        </label>
      </div>
      <a className="text-sm underline" href="#">
        Forgot password?
      </a>
    </div>

    <button
      type="button"
      onClick={onSubmit}
      className="mt-8 w-full h-11 rounded-full text-font-primary bg-primary border-primary border-1 hover:opacity-90 transition-opacity cursor-pointer hover:bg-font-primary hover:text-primary"
    >
      Login
    </button>
  </AuthForm>
);

export default LoginForm;
