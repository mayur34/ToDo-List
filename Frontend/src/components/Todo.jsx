import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { modalOpen } from "../redux/Slice/ModalSlice";
import { useEffect, useState } from "react";
import { editTodoTask, removeTodoTask, showTodoTask } from "../redux/Slice/slice";

export const Todo = (props) => {
  const modalState = useSelector(state=>state.modal.isOpen)
  const dispatch = useDispatch()
  const [checked,setChecked]=useState(false);

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
    <div className="todo-content" style={{ background: checked ? 'grey': ''}}>
      <div className="todo-edit">
        <input type="checkbox" onChange={()=>setChecked(!checked)} />
      {!checked && <FaRegEdit className="todo-icon" onClick={()=>{
        toEditToDo(task)
       }} /> }
        <span className="todo-name" style={{ textDecoration: checked ? 'line-through' : 'none' }}
        >{task}</span>
      </div>
      <AiFillDelete className="todo-icon" onClick={()=>{
        toRemoveToDo(task)
       }}  />
    </div>
  );
};
