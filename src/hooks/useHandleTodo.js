import { useDispatch } from "@/libs/react-redux";
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "@/store/constants";
import { useRef, useState } from "react";

function useHandleTodo() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (!value) {
      setError("Please enter a todo item");
      return;
    }
    setError("");
    dispatch({
      type: ADD_TODO,
      payload: {
        id: Date.now(),
        name: value,
      },
    });
    inputRef.current.value = "";
  };

  const handleEdit = (id, name) => {
    const newName = prompt("Edit todo name:", name)?.trim();
    if (!newName || newName === name) {
      return;
    }

    dispatch({
      type: EDIT_TODO,
      payload: {
        id,
        name: newName,
      },
    });
  };

  const handleDelete = (id) => {
    const hasDelete = confirm("Are you sure you want to delete this todo?");
    if (!hasDelete) {
      return;
    }
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };

  return {
    inputRef,
    handleForm,
    handleEdit,
    handleDelete,
    error,
  };
}

export default useHandleTodo;
