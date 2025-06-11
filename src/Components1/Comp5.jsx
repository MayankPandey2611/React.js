
import { usercontext } from "../App";
import { useContext } from "react";

const Comp5 = ()=>{
    const {user}=useContext(usercontext);
    return(
        <>
<h1>Component - 5 {user}</h1>

        </>
    )
}

export default Comp5;