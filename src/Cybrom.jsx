import { useContext } from "react";
// import Bhopal from "./Bhopal";
import { mycontext } from "./UserContext";


const Cybrom = ()=>{
    const {name} = useContext(mycontext);
    return(
        <>
            <h1>Welcome to Cybrom {name}</h1>
            {/* {children} */}
            {/* <Bhopal /> */}
        </>
    )
}

export default Cybrom;