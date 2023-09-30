import {createSlice} from "@reduxjs/toolkit"
import { useDebugValue } from "react";

const dataSlice =createSlice({
    name:"data",
    initialState:{
        name:"",
        age:"",
    },
    reducers:{
        setData :(state,action)=>{
             console.log(action.payload);
             state.name=action.payload.name;
             state.age=action.payload.age;
        }
    }
})


export const {setData} =dataSlice.actions;
export default dataSlice.reducer;