import { useState } from "react";
// import { AddTodoContext } from "../Context/AddTodo";
  import {useDispatch} from 'react-redux'
  import { addTodoTask } from "../redux/Slice/slice";

export const TodoInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch()

  const addTodo = () => {
    if(task){
    dispatch(addTodoTask(task))
    setTask("");
    }
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
