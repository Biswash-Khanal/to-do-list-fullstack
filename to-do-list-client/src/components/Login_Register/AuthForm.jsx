const AuthForm = ({
  title,
  subtitle,
  children,
  onClose,
  switchText,
  onSwitch,
}) => (
  <div className="bg-primary/30 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-full max-w-xl border border-font-primary/40">
    <div className="flex w-full">
<button
  onClick={onClose}
  className="cursor-pointer absolute top-4 right-4 text-font-primary hover:scale-110 transition-transform"
  aria-label="Close"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-8 h-8"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <line x1="8" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" />
    <line x1="16" y1="8" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" />
  </svg>
</button>

      <div className="w-full flex flex-col items-center justify-center">
        <form className="md:w-96 w-80 flex flex-col items-center justify-center">
          <h2 className="text-4xl text-gray-900 font-medium">{title}</h2>
          <p className="text-sm text-font-primary mt-3">{subtitle}</p>
          {children}
          <p className="text-font-secondary text-sm mt-4">
            {switchText}{" "}
            <span
              onClick={onSwitch}
              className="text-font-primary hover:underline cursor-pointer"
            >
              {title === "Sign in" ? "Sign up" : "Sign in"}
            </span>
          </p>
        </form>
      </div>
    </div>
  </div>
);

export default AuthForm;