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
    return(
        <>
<h1>Edit the Data Details</h1>

Enter Empno : <input type="text"  value={mydata.Empno} />
<br />

Enter Name : <input type="text"  value={mydata.name} />
<br />

Enter Degisnation : <input type="text"  value={mydata.Degisnation} />
<br />

Enter Salary : <input type="text"  value={mydata.Salary} />
<br />

        </>
    )
}

export default Edit;