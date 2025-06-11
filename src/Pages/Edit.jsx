import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Edit =()=>{
    const {id} = useParams();
    const [mydata , setmydata]= useState({});

    const loaddata = async()=>{
        let api = `http://localhost:3000/students/${id}`
        const response  = await axios.get(api);
        setmydata(response.data);
    }

    useEffect(()=>{
        loaddata();
    },[])
const handleinput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setmydata(values => ({...values , [name] : value}))
}

const handlesubmit = async()=>{
    let api  =`http://localhost:3000/students/${id}`
    let response = await axios.put(api , mydata)
    alert('DATA UPDATED')
    console.log(response.data);
    
}

    return(
        <>
<h1>Edit the Data Details</h1>

Enter Empno : <input type="text" name="Empno"  value={mydata.Empno}  onChange={handleinput}/>
<br />

Enter Name : <input type="text" name="name" value={mydata.name}  onChange={handleinput} />
<br />

Enter Degisnation : <input type="text" name="Degisnation" value={mydata.Degisnation}   onChange={handleinput}/>
<br />

Enter Salary : <input type="text" name="Salary" value={mydata.Salary}  onChange={handleinput} />
<br />
<button  onClick={handlesubmit}>Update Data</button>
        </>
    )
}

export default Edit;