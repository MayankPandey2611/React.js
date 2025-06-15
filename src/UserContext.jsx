import { useState, createContext } from "react";


const Mycontext = createContext();

const UserContext = ({ children }) => {
  const [name, setName] = useState("mayank !!");

  return (
    <Mycontext.Provider value={{ name, setName }}>
      {children}
    </Mycontext.Provider>
  );
};

export default UserContext;
export { Mycontext };
