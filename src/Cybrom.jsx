import { useContext } from "react";
// import Bhopal from "./Bhopal";
import { Mycontext } from "./UserContext";


const Cybrom = ({children})=>{
    const {name} = useContext(Mycontext);
    return(
        <>
            <h1>Welcome to Cybrom {name}</h1>
            {children}
            {/* <Bhopal /> */}
        </>
    )
}

export default Cybrom;