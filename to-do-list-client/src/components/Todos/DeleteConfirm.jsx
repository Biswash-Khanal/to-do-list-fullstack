import React from "react";

const DeleteConfirm = () => {
	return (
		<div className="bg-black backdrop-blur-2xl  absolute w-[50em] h-[50em] border-black ">
			Are You surr you want to delete this?
			<button>Yes</button>
			<button>No</button>
		</div>
	);
};

export default DeleteConfirm;
