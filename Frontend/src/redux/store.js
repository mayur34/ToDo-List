import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  todoreducer  from './Slice/slice'
import  Modalreducer  from './Slice/ModalSlice'

export const rootReducer = combineReducers({
    todo:todoreducer,
    modal:Modalreducer
})

export const store = configureStore({
   reducer:rootReducer
})

