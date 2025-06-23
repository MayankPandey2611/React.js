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
        },
        taskdelete:(state , actions)=>{
            state.task=state.task.filter(key=>key.id!=actions.payload)
        }
    }
})

export const {addtodoTask ,taskdelete}= todoslice.actions;
export default todoslice.reducer;




// import { createSlice } from "@reduxjs/toolkit";


// const todoslice = createSlice({
//     name:"todo",

//     initialState:{
//         task:[]
//     },

//     reducers:{
//         addtodolist:(state , actions)=>{
//             state.task.push(actions.payload)
//         }

        
//     }
// })
//  export const {addtodolist} = todoslice.actions;
//  export default todoslice.reducer;












