
import { useState } from "react";
import axios from "axios";


const Search = ()=>{
    const [eno,seteno] = useState("");

    const [mydata , setdata] = useState([])

    const handlesubmit =async()=>{

        let api = `http://localhost:3000/students/?Empno=${eno}`
        const response = await axios.get(api)
        console.log(response.data);
        setdata(response.data);
        
    }

    const ans = mydata.map((key)=>{
return(
    <>
        <tr style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
            <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{key.Empno}</td>
            <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{key.name}</td>
            <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{key.Degisnation}</td>
            <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{key.Salary}</td>
        </tr>
    </>
)
    })
    return(
        <>
<h1>Search Data </h1>
Enter Empno : <input type="text" value={eno} onChange={(e)=>{seteno(e.target.value)}}/>
<button onClick={handlesubmit}>Search</button>
<hr/>
<table style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
<tr style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Empno</th>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Name</th>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Degisnation</th>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Salary</th>
</tr>
{ans}
</table>

        </>
    )
}

export default Search;