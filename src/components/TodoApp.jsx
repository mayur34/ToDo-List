import React from "react";
import { TodoHeader } from "./TodoHeader";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import "./todo.css";

export const TodoApp = () => {
  return (
    <div className="todo-app-container">
      <div className="container">
        <TodoHeader />
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};
