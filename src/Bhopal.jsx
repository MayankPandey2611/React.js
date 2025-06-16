import { useState } from "react";

import { usercontext } from "./App";

import { useContext } from "react";
const Bhopal = ()=>{

    const {user , setuser} = useContext(usercontext);
    return(
        <>
<h1>Welcome To Bhopal : {user}</h1>
<button onClick={()=>{setuser("yash !!")}}>Click !!</button>
        </>
    )
}

export default Bhopal;