import InputField from "../Login_Register/InputField";
import { modalText } from "../../assets/assets";
import axios from "../../api/axios";

const ConfirmModal = ({ onClose, setToBeOption, toBeOption, type, setUserTodos }) => {
	const title = modalText[type]?.title || "Confirm Action";

	const handleDelete = async () => {
		try {
            console.log(toBeOption)
			const response = await axios.delete(`/todos/${toBeOption.todo._id}`);
			if (response.data.success === true) {
				console.log(response.data.message);

                setUserTodos((prev)=>prev.filter((todo)=>todo._id!==toBeOption.todo._id))

                setToBeOption({ open: false, todo: null });
			}
		} catch (error) {
			console.log(error);
			
		}
	};

	return (
		<div className="bg-primary/30 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-full max-w-xl border border-font-primary/40">
			<div className="flex w-full">
				{/* close button */}
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
						<circle
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<line
							x1="8"
							y1="8"
							x2="16"
							y2="16"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<line
							x1="16"
							y1="8"
							x2="8"
							y2="16"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
					</svg>
				</button>

				<div className="w-full flex flex-col items-center justify-center">
					<h2 className="text-4xl text-gray-900 font-medium mt-10">{title}</h2>
					{type === "edit" || type === "add" ? (
						<form
							onSubmit={null}
							className="md:w-96 w-80 flex flex-col items-center justify-center"
						>
							<InputField
								type="text"
								placeholder="Title"
								name="title"
								value={null}
								onChange={null}
							/>
							<InputField
								type="description"
								placeholder="Description"
								name="description"
								value={null}
								onChange={null}
							/>

							<button
								type="submit"
								className="mt-8 w-2xs h-11 rounded-full text-font-primary bg-primary border-font-primary border-1 hover:opacity-90 transition-opacity cursor-pointer hover:bg-font-primary hover:text-primary"
							>
								Confirm
							</button>
						</form>
					) : (
						<div className="flex gap-5">
							<button
								onClick={handleDelete}
								className="mt-8 px-5 h-11 rounded-full text-font-primary bg-primary border-green-500 border-1 hover:opacity-90 transition-opacity cursor-pointer hover:bg-green-800 hover:text-primary"
							>
								Confirm
							</button>
							<button
								onClick={onClose}
								className="mt-8 px-5 h-11 rounded-full text-font-primary bg-primary border-red-500 border-1 hover:opacity-90 transition-opacity cursor-pointer hover:bg-red-800 hover:text-primary"
							>
								Cancel
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ConfirmModal;
