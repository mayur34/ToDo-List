import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: [],
    editTask:null,
  }

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodoTask:(state,action) =>{
            state.task.push(action.payload)
        },
        editTodoTask:(state,action) =>{
            
            const { taskVal, modalText } = action.payload; 
            console.log(taskVal,'2334');
            
           const prp = state.task.find(task=>taskVal.includes(task))
               if(prp){
                state.task=state.task.filter(task=> task!=prp)
                state.task.push(modalText)
               }
        },
        removeTodoTask:(state,action)=>{
            const taskVal = action.payload
            const prp = state.task.find(task=>taskVal.includes(task))
               console.log(prp,'wpw')
               if(prp){
                state.task=state.task.filter(task=> task!=prp)
               }
        },
        showTodoTask:(state,action)=>{
            console.log(action.payload,'momos')
           state.editTask = action.payload
        }
    }
})

export const { addTodoTask, editTodoTask, removeTodoTask, showTodoTask } = todoSlice.actions;
export default todoSlice.reducer