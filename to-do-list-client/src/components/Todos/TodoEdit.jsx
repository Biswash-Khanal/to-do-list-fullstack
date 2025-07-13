import React from "react";
import ConfirmModal from "./ConfirmModal";

const TodoEdit = ({setToBeUpdated}) => {



    const handleClose = ()=>{

        setToBeUpdated({open:false, todo:null})
    }

	return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-primary/520">
            <ConfirmModal type="edit" onClose={handleClose} title="Hello" subtitle="Hello" switchText="Don’t have an account?">

            </ConfirmModal>
        </div>
	);
};

export default TodoEdit;
