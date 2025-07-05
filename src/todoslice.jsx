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
        },
        taskcomplete:(state,actions)=>{
            for(var i=0; i<state.task.length; i++){
                if (state.task[i].id == actions.payload){
                    state.task[i].status="complete";
                }
            }
        },
        taskIncomplete:(state,actions)=>{
            for(var i=0; i<state.task.length; i++){
                if (state.task[i].id == actions.payload){
                    state.task[i].status="incomplete";
                   
                }
            }
        },
        editdatasave:(state,actions)=>{
            for(var i =0; i<state.task.length; i++){
                if(state.task[i].id == actions.payload.id){
                    state.task[i].work = actions.payload.work;
                }
            }
        }
    }
})

export const {addtodoTask ,taskdelete,taskcomplete ,taskIncomplete ,editdatasave}= todoslice.actions;
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












