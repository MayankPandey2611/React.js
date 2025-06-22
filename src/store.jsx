
// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from "./counterSlice"


// const store = configureStore({
//     reducer:{
//         mycounter : myReducer
//     }
// })

// export default store;



// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from "./colorSlice"


// const store = configureStore({
//     reducer:{
//         mycolor : myReducer
//     }
// })

// export default store;

// import myReducer from "./colorSlice"

// const store = configureStore({
//     reducer: {
//     mycolor : myReducer

//     }
// })


// export default store;







import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./todoslice"


const store = configureStore({

    reducer:{
        todo:myReducer
    }
})

export  default store;