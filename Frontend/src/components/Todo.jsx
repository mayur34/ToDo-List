import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { modalOpen } from "../redux/Slice/ModalSlice";
import { useEffect } from "react";
import { editTodoTask, removeTodoTask, showTodoTask } from "../redux/Slice/slice";

export const Todo = (props) => {
  const modalState = useSelector(state=>state.modal.isOpen)
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log(modalState,'why')
  })

  function toEditToDo(task){
    dispatch(modalOpen(true))
    dispatch(showTodoTask(task))
  }

  function toRemoveToDo(task){
    dispatch(removeTodoTask(task))
  }
  const { task } = props;
  return (
    <div className="todo-content">
      <div className="todo-edit">
       <FaRegEdit className="todo-icon" onClick={()=>{
        toEditToDo(task)
       }} />
        <span className="todo-name">{task}</span>
      </div>
      <AiFillDelete className="todo-icon" onClick={()=>{
        toRemoveToDo(task)
       }}  />
    </div>
  );
};
