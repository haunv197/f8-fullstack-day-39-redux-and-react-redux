import { Button } from "./ui/button";

function Todo({ name, onEdit, onDelete }) {
  return (
    <div className="flex gap-2 items-center py-1 justify-between">
      <span>{name}</span>
      <div className="flex gap-2">
        <Button
          onClick={onEdit}
          variant="outline"
          className="py-0 px-3 text-blue-600"
        >
          Edit
        </Button>
        <Button
          onClick={onDelete}
          variant="outline"
          className="py-0 px-3 text-red-600"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Todo;
