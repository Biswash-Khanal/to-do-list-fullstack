import React, { useState, useEffect } from "react";
import InputField from "../Login_Register/InputField";
import { modalText } from "../../assets/assets";
import axios from "../../api/axios";
import toast from "react-hot-toast";


const ConfirmModal = ({ onClose, setToBeOption, toBeOption, type, setUserTodos }) => {
  const title = modalText[type]?.title || "Confirm Action";

  // Controlled input states
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");

  useEffect(() => {
    if (toBeOption?.todo && (type === "edit" || type === "add")) {
      setTitleInput(toBeOption.todo.title || "");
      setDescInput(toBeOption.todo.description || "");
    }
  }, [toBeOption, type]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/todos/${toBeOption.todo._id}`);
      if (response.data.success) {
        setUserTodos((prev) => prev.filter((todo) => todo._id !== toBeOption.todo._id));
        setToBeOption({ open: false, todo: null });
        console.log(response.data.todo);
        toast.success(response.data.message)
      }
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error)
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/todos", {
        title: titleInput,
        description: descInput,
      });


      if (response.data.success) {
        
        setUserTodos((prev) => [...prev, response.data.todo]);
        setToBeOption({ open: false, todo: null });
        console.log(response.data.todo);
        toast.success(response.data.message)
      }
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error)
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/todos/${toBeOption.todo._id}`, {
        title: titleInput,
        description: descInput,
      });
      if (response.data.success) {
        setUserTodos((prev) =>
          prev.map((todo) =>
            todo._id === toBeOption.todo._id ? response.data.todo : todo
          )
        );
        setToBeOption({ open: false, todo: null });
        console.log(response.data.todo);
        toast.success(response.data.message)
      }
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error)
    }
  };

  const handleSubmit = type === "add" ? handleCreate : handleUpdate;

  return (
    <div className="bg-primary/30 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-full max-w-xl border border-font-primary/40">
      <div className="flex w-full">
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-font-primary hover:scale-110 transition-transform"
          aria-label="Close"
        >
          {/* Close Icon SVG */}
        </button>

        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-4xl text-gray-900 font-medium mt-10">{title}</h2>
          {type === "edit" || type === "add" ? (
            <form onSubmit={handleSubmit} className="md:w-96 w-80 flex flex-col items-center justify-center">
              <InputField
                type="text"
                placeholder="Title"
                name="title"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              />
              <InputField
                type="description"
                placeholder="Description"
                name="description"
                value={descInput}
                onChange={(e) => setDescInput(e.target.value)}
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
