import axios from "axios";
import { useEffect, useState } from "react";

const Display = ()=>{
 const [mydata , setdata] = useState([]);

 const loaddata =async()=>{
    let api = "http://localhost:3000/students"
    const response = await axios.get(api);
    console.log(response.data);
    
    setdata(response.data);
 }

 useEffect(()=>{
    loaddata();
 },[])

const ans = mydata.map((key) => {
  return (
    <tr style={{borderCollapse:"collapse" ,border:"1px solid black"}} >
      <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{key.Empno}</td>
      <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{key.name}</td>
      <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{key.Degisnation}</td>
      <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{key.Salary}</td>
    </tr>
  );
});

 


    return(

        <>

<h1>Welcome to display page</h1>
<hr/>
<table style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
    <tr style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
        <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Empno</th>
        <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>name</th>
        <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Degisnation</th>
        <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>salary</th>
    </tr>
    {ans}
</table>
        </>
    )
}

export default Display;