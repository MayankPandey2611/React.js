// import Cybrom from "./Students";



// import Button from 'react-bootstrap/Button';

// import Spinner from 'react-bootstrap/Spinner';


  // const name = ["mayank","ayush","piyush","om"]
  //     const ans = name.map((key)=> <li>{key}</li>
       
  //     )

  // const student = [
  //   {
  //     "rollno":121,
  //     "name":"mayank",
  //     "city":"bhopal",
  //     "fess":30000
  //   },
  //    {
  //     "rollno":122,
  //     "name":"ayush",
  //     "city":"bhopal",
  //     "fess":40000
  //   },
  //    {
  //    "rollno":123,
  //     "name":"mayank",
  //     "city":"bhopal",
  //     "fess":60000
  //   },
  //    {
  //     "rollno":124,
  //     "name":"mayank",
  //     "city":"bhopal",
  //     "fess":34000
  //   },
  //    {
  //     "rollno":125,
  //     "name":"mayank",
  //     "city":"bhopal",
  //     "fess":90000
  //   },
  // ]




// const StuInfo = {
//   "name" : "mayank",
//   "subject": "react js",
//   "city":"mp nagar bhopal",
//   "fees":43000
// }


// const data1={
//   color:"red",
//   fontFamily:"sens-serif",
//   fontSize:"50px"
// }

// const data2={
//   color:"blue",
//   fontFamily:"arial",
//   fontSize:"40px"
// }


const Cybrom =()=>{
    return(
<>
    {/* <h1> Student Information</h1>
    <h2> Name : {props.nm}</h2>
    <h2>Subject : {props.sub}</h2>
    <h2> Address : {props.city}</h2>
    <h2>Fees : {props.fs}</h2> */}

    {/* <h1 className="head">We are react developer</h1>
    <p id="data">hdvckbckqewkdqwkdbkwjdkqwjhdvckbckqewkdqwkdbkwjdkqwjhdvckbckqewkdqwkdbkwjdkqwjhdvckbckqewkd
    qwkdbkwjdkqwjhdvckbckqewkdqwkdbkwjdkqwjhdvckbckqewkdqwkdbkwjdkqwjhdvckbckqewkdqwkdbkwjdkqwjhdvckbckqewkdqwkdbkwjdkqw
    jhdvckbckqewkdqwkdbkwjdkqwj</p> */}


    {/* <h1 align="center">Welcome !!</h1>
<Cybrom  nm={StuInfo.name} sub={StuInfo.subject} city={StuInfo.city} fs={StuInfo.fees} /> */}

{/* <h1 style={{color:"red",fontFamily:"sans-serif",textDecoration:"underline"}}>Welcome</h1>
<h1 style={{color:"blue",fontStyle:"italic"  , textDecoration:"overline"}}>We our developer</h1> */}

{/* <h1 style={data1}>Welcome</h1>
<h1 style={data2}>We are developer</h1> */}
{/* 
<div style={{backgroundColor:"lightblue",width:"40%",border:"2px solid blue",padding:"60px",borderRadius:"50px",marginLeft:"25%",marginTop:"10%"}}>
  <div style={{backgroundColor:"yellowgreen",border:"2px solid green",padding:"40px",borderRadius:"50px"}}>
    <div style={{backgroundColor:"orange",border:"2px solid red",padding:"8px",borderRadius:"40px"}}>
      <h1 style={{textAlign:"center"}}>Cybrom</h1>
    </div>
  </div>
</div> */}

{/* 
<h1>Welcome</h1>
<Cybrom /> */}


  {/* <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

         <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> */}


    {/* <TopMenu />
<Banner />
<MyCard />
<Footer /> */}

{/* <ol>
  {ans}
</ol> */}
</>
    )
}
export default Cybrom;


// import { useState , useEffect} from "react";

// const App =()=>{

//   const [myval,setMyVal ] = useState(0);
//   const [multi,setMulti ] = useState(0);

// useEffect(()=>{

//   setMulti(myval*2);

// },[myval])

//   return (

// <>


// <h1 >welcome </h1>

// <button onClick={()=>{setMyVal(myval+1)}}>Click Here!</button>

// <h3>Counter App:{myval} </h3>
// <h4>Counter App:{multi} </h4>






// import { useState } from "react";

// const App=()=>{

//   const [input , setInput] = useState({})

//   const handle = (e)=>{
//     let name = e.target.name;
//     let value = e.target.value;

//     setInput(values =>({...values , [name] : value}))
//     console.log(input);
    
//   }
  
//   return(
//     <>
// <h1>Application Form</h1>

// <br/>
// Enter Rollno : <input type="text"   name = "rollno"
//   onChange={handle} />

// <br/>
// Enter Name : <input type="text"   name = "name"
//   onChange={handle} />
 
// <br/>
// Enter city : <input type="text"   name = "city"
//   onChange={handle} />
// <br/>
// Enter fees : <input type="text"    name = "fees"
//   onChange={handle} />

// <br/>
// <button onClick={handle}>Click Here!</button>
//     </>
//   )
// }





import { useState } from "react";
import axios from "axios";
const App = ()=>{
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

<h1>Application Employee Data</h1>
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
Enter City: <input type="text" name="City" onChange={handle}/>
<br/>
<br/>
<button onClick={handlesubmit}>Submit</button>

    </>
  )
}