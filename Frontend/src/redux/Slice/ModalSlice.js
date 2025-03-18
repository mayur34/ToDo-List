import { createSlice } from "@reduxjs/toolkit";
 
export const initialState={
    isOpen:false
}

export const ModalSlice = createSlice({
name:'Modal',
initialState,
reducers:{
    modalOpen:(state,action)=>{
        console.log(state,'jo')
        state.isOpen = action.payload
    }
}
})

export const {modalOpen} = ModalSlice.actions
export default ModalSlice.reducer;
