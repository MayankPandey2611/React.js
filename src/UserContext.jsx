import { useState , createContext } from "react";

let mycontext = createContext();
const UserContext  = ({children})=>{
const [name,setname] = useState("mayank !!");
    return(
        <>
<mycontext.Provider value={{name}}>
    {children}
</mycontext.Provider>
        </>
    )
}

export default UserContext;
export  {mycontext};