
// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from "./counterSlice"

import { configureStore } from "@reduxjs/toolkit";


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









const store = configureStore({

    reducer:{
        todo:myReducer
    }
})

export  default store;