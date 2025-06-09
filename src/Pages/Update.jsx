import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = ()=>{
 const [mydata , setdata] = useState([]);

 const navigate = useNavigate();

 const loaddata =async()=>{
    let api = "http://localhost:3000/students"
    const response = await axios.get(api);
    console.log(response.data);
    
    setdata(response.data);
 }

 useEffect(()=>{
    loaddata();
 },[])


 const Edit = async(id)=>{
   navigate(`/edit/${id}`)
 }
 const Delete = async(id)=>{
    let api = `http://localhost:3000/students/${id}`
    const response  = await axios.delete(api)
    alert('data successfully deleted')
    loaddata();
 }

const ans = mydata.map((key) => {
  return (
    <tr style={{borderCollapse:"collapse" ,border:"1px solid black"}} >
      <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{key.Empno}</td>
      <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}> {key.name}</td>
      <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{key.Degisnation}</td>
      <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{key.Salary}</td>
      <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
        <button onClick={()=>{Edit(key.id)}}>Edit</button>
      </td>
      <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
        <button onClick={()=>{Delete(key.id)}}>Delete</button>
      </td>
    </tr>
  );
});

 


    return(

        <>

<h1>Welcome to Update page</h1>
<hr/>
<table style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
    <tr style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
        <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Empno</th>
        <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Name</th>
        <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Degisnation</th>
        <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Salary</th>
        <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Edit Details</th>
        <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Delete Data</th>
    </tr>
    {ans}
</table>
        </>
    )
}

export default Update;