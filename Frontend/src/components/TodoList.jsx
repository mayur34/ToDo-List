import { useSelector } from "react-redux";
import { Todo } from "./Todo";

export const TodoList = () => {
  const list = useSelector(state=>state.todo.task)
  // console.log(list,'wow122')
  return (
    <div>
      {list.length && list.map((tasklist, index) => {
        return <Todo key={index} task={tasklist} />;
      })}
    </div>
  );
};
