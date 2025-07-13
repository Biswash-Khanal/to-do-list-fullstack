import React from "react";
import ConfirmModal from "./ConfirmModal";

const TodoEdit = ({setToBeUpdated, setUserTodos, toBeUpdated}) => {



    const handleClose = ()=>{

        setToBeUpdated({open:false, todo:null})
    }

	return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-primary/520">
            <ConfirmModal setUserTodos={setUserTodos} toBeOption={toBeUpdated} setToBeOption={setToBeUpdated} type="edit" onClose={handleClose} >

            </ConfirmModal>
        </div>
	);
};

export default TodoEdit;
