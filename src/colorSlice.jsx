import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name:"mycolor",

    initialState:{
        color:"red"
    },

    reducers:{
        bgcolorchange:(state)=>{
            state.color ="green"
        }
    }
})

export const {bgcolorchange} = colorSlice.actions;
export default colorSlice.reducer;