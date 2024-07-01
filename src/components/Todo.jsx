import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

export const Todo = (props) => {
  const { task } = props;
  const { todo } = task;
  return (
    <div className="todo-content">
      <div className="todo-edit">
        <FaRegEdit className="todo-icon" />
        <span className="todo-name">{todo}</span>
      </div>
      <AiFillDelete className="todo-icon" />
    </div>
  );
};
