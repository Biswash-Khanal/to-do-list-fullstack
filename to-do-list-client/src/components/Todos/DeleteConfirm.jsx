import React from "react";
import ConfirmModal from "./ConfirmModal";


const DeleteConfirm = ({setToBeDeleted, toBeDeleted, setUserTodos}) => {

	    const handleClose = ()=>{

        setToBeDeleted({open:false, todo:null})
    }

	return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-primary/520">
            <ConfirmModal setUserTodos={setUserTodos} toBeOption={toBeDeleted} setToBeOption={setToBeDeleted} type="delete" onClose={handleClose}>

            </ConfirmModal>
        </div>
	);
};

export default DeleteConfirm;
