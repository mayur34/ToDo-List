import { useState, useContext } from "react";
import { AddTodoContext } from "../Context/AddTodo";
import { v4 } from "uuid";

export const TodoInput = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useContext(AddTodoContext);

  const addTodo = () => {
    setList([...list, { id: v4(), todo: task }]);
    setTask("");
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className="input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="add-todo" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};
