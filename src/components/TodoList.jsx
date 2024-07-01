import { Todo } from "./Todo";

export const TodoList = () => {
  const temp = [1, 2, 3, 4, 5];
  return (
    <div>
      {temp.map((_, index) => {
        return <Todo key={index} />;
      })}
    </div>
  );
};
