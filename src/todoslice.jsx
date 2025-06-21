import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
    name:"todo",
    initialState:{
        task:[]
    },

    reducers:{
        addtodoTask:(state , actions)=>{
            console.log(actions.payload);
            state.task.push(actions.payload);
        }
    }
})

export const {addtodoTask}= todoslice.actions;
export default todoslice.reducer;