import { useEffect, useRef } from "react";
import { useSelector } from "../../libs/react-redux";
import Todo from "@/components/Todo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useHandleTodo from "@/hooks/useHandleTodo";

function TodoApp() {
  // Do initState yêu cầu ban đầu là mảng rỗng không phải object nên mới phải trả về state, nếu là object thì sẽ là state.todos
  const todos = useSelector((state) => state);
  const { inputRef, handleForm, handleEdit, handleDelete, error } =
    useHandleTodo();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className=" min-h-screen">
      <div className="w-100  mx-auto">
        {/* Page heading */}
        <h1 className="text-2xl mb-4">Todo App</h1>

        {/*  Form  */}
        <form action="" id="todo-form" onSubmit={(e) => handleForm(e)}>
          <div className="flex gap-2 justify-between">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Enter your todo..."
            />
            <Button className="py-0 px-3 w-31 bg-blue-600 text-white">
              Add Todo
            </Button>
          </div>
          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
        </form>

        {/* Task list */}
        {!!todos?.length ? (
          <ul className="w-100">
            {todos.map((todo) => {
              const { id, name } = todo;
              return (
                <li key={id}>
                  <Todo
                    onEdit={() => handleEdit(id, name)}
                    onDelete={() => handleDelete(id)}
                    name={name}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="my-3 text-gray-500 text-center">
            The todo list is empty.
          </p>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
