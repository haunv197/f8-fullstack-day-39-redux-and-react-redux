import { useDispatch } from "@/libs/react-redux";
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "@/store/constants";
import { useRef } from "react";

function handleValidateInput(str) {
  if (!str.trim()) {
    alert("Please enter a todo item");
    return false;
  }
  return true;
}

function useHandleTodo() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    const isValid = handleValidateInput(value);
    if (!isValid) {
      return;
    }

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
  };
}

export default useHandleTodo;
