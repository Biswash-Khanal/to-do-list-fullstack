import React from 'react'
import ConfirmModal from './ConfirmModal'


const TodoAdd = ({setToBeCreated, toBeCreated, setUserTodos}) => {
  const handleClose = ()=>{

        setToBeCreated({open:false, todo:null})
    }

	return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-primary/520">
            <ConfirmModal setUserTodos={setUserTodos} toBeOption={toBeCreated} setToBeOption={setToBeCreated} type="add" onClose={handleClose} >

            </ConfirmModal>
        </div>
	);
}

export default TodoAdd
