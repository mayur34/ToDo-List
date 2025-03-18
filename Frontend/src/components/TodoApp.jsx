import React from "react";
import { TodoHeader } from "./TodoHeader";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import "./todo.css";
import { useSelector } from "react-redux";
import Modal from './Modal';
export const TodoApp = () => {
  const modalState = useSelector(state=>state.modal.isOpen)
  const taskVal = useSelector(state=>state.todo.task)

  return (
    <div className="todo-app-container">
      <div className="container">
        <TodoHeader />
        <TodoInput />
        <TodoList />
        {modalState && <Modal task={taskVal}/>}
      </div>
    </div>
  );
};
