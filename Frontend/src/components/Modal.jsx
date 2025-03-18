import { useState } from 'react';
import './modal.css'
import { editTodoTask } from '../redux/Slice/slice';
import { useDispatch, useSelector } from 'react-redux';
import { modalOpen } from '../redux/Slice/ModalSlice';

const Modal = (props)=>{    
    const taskVal= props.task
    const editTask = useSelector(state =>state.todo.editTask)

    const [modalText,setModalText]=useState(editTask)
    const dispatch = useDispatch()

    function editChange(value){
        console.log(value,'what')
        setModalText(value)
    }
 
    function editTodoTaskFun(){

        dispatch(editTodoTask({taskVal,modalText}))
        dispatch(modalOpen(false))
    }
    
 return (
    <div className='modal-container'>
        
    <h1 className='modal-header'>Edit Your Task</h1>
    
      <textarea className='modal-input' value={modalText} onChange={(e)=>editChange(e.target.value)}  />
    
      <div className='button-container'>
      <button onClick={()=>editTodoTaskFun()}>ok</button>
      <button>Cancel</button>
      </div>
    </div>
 )
}

export default Modal;