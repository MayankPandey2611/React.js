

import { useState } from "react";
import axios from "axios";

const Insert = ()=>{
const [input , setInput] = useState({});

const handle = (e)=>{
let name = e.target.name;
let value = e.target.value;

setInput(values=>({...values , [name]:value}));
}


const handlesubmit =async ()=>{
  let api = "http://localhost:3000/students";

  const response = await axios.post(api,input);
  alert("data inserted !!")
}

  return(
<>

<h1>Insert Employee Data</h1>
<br/>
Enter Name: <input type="text" name="name" onChange={handle}/>
<br/>
<br/>
Enter Empno: <input type="text" name="Empno" onChange={handle}/>
<br/>
<br/>
Enter Degisnation: <input type="text" name="Degisnation" onChange={handle}/>
<br/>
<br/>
Enter salary: <input type="text" name="Salary" onChange={handle}/>
<br/>
<br/>
<button onClick={handlesubmit}>Submit</button>

    </>
  )
}

export default Insert;