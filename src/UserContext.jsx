import { useState , createContext } from "react";

let Mycontext = createContext();
const UserContext  = ({children})=>{
const [name,setname] = useState("mayank !!");
    return(
        <>
<Mycontext.Provider value={{name}}>
    {children}
    <h3>using children tag in UserContext code</h3>
</Mycontext.Provider>
        </>
    )
}

export default UserContext;
export  {Mycontext};