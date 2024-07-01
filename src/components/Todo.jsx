import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

export const Todo = () => {
  return (
    <div className="todo-content">
      <div className="todo-edit">
        <FaRegEdit className="todo-icon" />
        <h1 className="todo-name">text</h1>
      </div>
      <AiFillDelete className="todo-icon" />
    </div>
  );
};
