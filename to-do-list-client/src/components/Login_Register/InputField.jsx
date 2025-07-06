const InputField = ({ type, placeholder }) => (
  <div className="border border-font-primary flex items-center mt-6 w-full bg-transparent  h-12 rounded-full overflow-hidden pl-6 gap-2">
    <input
      type={type}
      placeholder={placeholder}
      className="bg-transparent text-font-secondary placeholder-font-secondary/50 outline-none text-sm w-full h-full"
      required
    />
  </div>
);

export default InputField;
