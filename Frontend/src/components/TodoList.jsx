import { useContext } from "react";
import { Todo } from "./Todo";
import { AddTodoContext } from "../Context/AddTodo";

export const TodoList = () => {
  const [list, setList] = useContext(AddTodoContext);
  return (
    <div>
      {list.map((list, index) => {
        return <Todo key={index} task={list} />;
      })}
    </div>
  );
};
