// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home";
// import Insert from "./Pages/insert";
// import Display from "./Pages/display";
// import Layout from "./Layout";
// import Update from "./Pages/Update";
// import Search from "./Pages/Search";
// import Contact from "./Pages/Contact"
// import Edit from "./Pages/Edit";
// import Student from "./Empdata"






//  const ans= Student.map((key)=>{
//     return(
//       <>
//         <tr>
//           <td>{key.rollno}</td>
//           <td>{key.name}</td>
//           <td>{key.city}</td>
//           <td>{key.fess}</td>
//         </tr>
//       </>
//     )
//   })




// import EmpData from "./Empdata";
// import EmpDesign from "./EmpDesign";


// const ans = EmpData.map((key)=> <EmpDesign emno={key.empno} nm={key.name} dep={key.department} sal={key.salary} />)


// import ProDesign from "./ProDesign";
// import Prodata from "./Product";

// const ans = Prodata.map((key)=> <ProDesign pn={key.pno} pnm={key.pname} pq={key.qty} pc={key.city} />)


// import { BrowserRouter , Routes , Route } from "react-router-dom";
// import Layout from "./Pages/Layout";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Projects from "./Projects";
// import NoPage from "./Pages/NoPage";


// import { BrowserRouter,Routes , Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./Pages/Home";
// import Services from "./Pages/Services"
// import Contact from "./Pages/Contact"
// import About from "./Pages/About";
// import Projects from "./Pages/Projects";





// import { useState, createContext } from "react";
// import Comp1 from "./Components1/Comp1";
// const usercontext = createContext();


// import { useState , useMemo } from "react";
// import { useEffect, useRef, useState } from "react";


  // const [user , setuser] = useState('mayank !!');

  // const [add,setadd] = useState(0)
  // const [minus,setminus] =useState(100)

  // const mymulti = useMemo(()=>{
  //   console.log("****");
  //   return add*2;
    
  // },[add])



// const [num , setnum] = useState(0);
// const [city , setcity] = useState("");


// const myexpn=useMemo(()=>{
//   for(var i=0; i<1000000000; i++){

//   }
//   return num*2;
// },[num])



// function myexpn(){
//   for(var i=0; i<1000000000; i++){}
//   return num*2;
// }


// const myRef = useRef();

// const func = ()=>{
//   myRef.current.innerHTML="welcome to cybrom"
// }

// const format = ()=>{
//   myRef.current.style.width="400px"
//   myRef.current.style.border="3px solid black"
//   myRef.current.style.backgroundColor="orange"
//   myRef.current.style.padding="30px"
//   myRef.current.style.borderRadius="30px"
// }


// const [val,setval] = useState("")

// useEffect(()=>{
//   myRef.current++;
// })

// const border= ()=>{
//   myRef.current.style.width="300px"
//   myRef.current.style.borderRadius="30px"
//   myRef.current.style.border="3px solid red"
// }


// const bgcolor = ()=>{
//   myRef.current.style.backgroundColor="yellow"
// }

// const center = ()=>{
//   myRef.current.style.color="red"
//   myRef.current.style.fontSize="60px"
// }


// import { useDispatch, useSelector } from "react-redux";
// import { Decrement, Increment } from "./counterSlice";

// import { useDispatch, useSelector } from "react-redux";
// import { bgcolorchange } from "./colorSlice";
// import { useState } from "react";




import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodoTask } from "./todoslice";

const App = ()=>{

  // const count = useSelector((state)=>state.mycounter.count);
  // const dispatch = useDispatch();

//   const myclr = useSelector(state=>state.mycolor.color);
//   const dispatch = useDispatch();
// const [txtclr , setclr]=useState("");


    const [data , setdata] = useState("");
    const Task = useSelector(state=>state.todo.task);
    const dispatch = useDispatch();
let serialno =0;
    const ans = Task.map((key)=>{
      serialno++;
      return(
      <tr style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
        <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{serialno}</td>
        <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}>{key.work}</td>
        <td style={{borderCollapse:"collapse" ,border:"1px solid black"}} ></td>
        <td style={{borderCollapse:"collapse" ,border:"1px solid black"}}></td>
        <button>Delete</button>
      </tr>
      )
    })
{/* <i class="fa-solid fa-circle-check"></i>
  <i class="fa-solid fa-circle-xmark"></i>
  <i class="fa-solid fa-trash"></i> */}
  return(
    <>

<h1>Welcome to ToDo App</h1>
Enter Task : <input type="text" value={data} onChange={(e)=>{setdata(e.target.value)}} />
<button onClick={()=>{dispatch(addtodoTask({work:data}))}}>Add To List</button>
  <br/>
  <br/>

<table style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
  <tr style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>#</th>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Given Task</th>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Completed</th>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Not Completed</th>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Delete</th>
  </tr>
  {ans}
</table>


{/* 
<h1>Welcome</h1>
Enter Color : <input type="text" value={txtclr} onChange={(e)=>{setclr(e.target.value)}}/>
<button onClick={()=>(dispatch(bgcolorchange(txtclr)))}>Change</button>
<div style={{width:"200px", height:"300px" , backgroundColor:myclr}}>

</div> */}

{/* EXAMPLE 2. OF USING USESELECTOR AND USEDISPATCH METHODS */}

{/* <h1>Welcome !!!</h1>
<button onClick={()=>{dispatch(bgcolorchange())}}>Click To change</button>
<div style={{width:"200px", height:"300px" , backgroundColor:myclr}}>

</div> */}



{/* EXAMPLE 1. OF USING USESELECTOR AND USEDISPATCH METHODS */}
{/* <h1>Welcome !!</h1>
<button onClick={()=>{dispatch(Increment())}}>Increment</button>
<h2>{count}</h2>
<button onClick={()=>{dispatch(Decrement())}}>Decrement</button> */}






{/* 
<h1>Welcome To india</h1>
<br/>
<button onClick={border}>Click here</button>
<button onClick={bgcolor}>Click here</button>
<button onClick={center}>Click here</button>
<br/>

<div>
<br/>

<h1 ref={myRef}>Welcome To cybrom</h1>
</div>

 */}


{/* <br/>
Enter : <input type="text" value={val} onChange={(e)=>{setval(e.target.value)}}/>
<h1>My Render Count : {myRef.current}</h1> */}




{/* <h1 ref={myRef}>Welcome to my app</h1> */}
{/* <button onClick={format}>Click Here !!!</button> */}








{/* 
Enter number : <input type="number" value={num} onChange={(e)=>{setnum(e.target.value)}} />
Enter City : <input type="text" value={city} onChange={(e)=>{setcity(e.target.value)}} />
<h2>My expensive function : {myexpn}</h2> */}
{/* <h2>my function : {myexpn()}</h2> */}




{/* 
<h2>My multiplication: {mymulti}</h2>
<h2>Addition : {add}</h2>
<h2>Subtraction: {minus}</h2>

<button onClick={()=>{setadd(add+1)}}>Addition</button>
<button onClick={()=>{setminus(minus-1)}}>subtraction</button> */}


{/* <Cybrom /> */}


     {/* GLOBAL ACCESS */}
{/* <Cybrom>

  <h3>using children tag !!</h3>
  
</Cybrom> */}



                               {/* ACCESS COMPONENTS */}

{/* <h1>Welcome to my app {user}</h1>
<button onClick={()=>{setuser("ayush !!")}}>Click Here</button>
<usercontext.Provider value={{user , setuser}}>

<Cybrom />

</usercontext.Provider> */}























                                {/* CRUD OPERATIONS USAGE */}


{/* <BrowserRouter> 
<Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path="home" element={<Home/>}/>
  <Route path="insert" element={<Insert/>}/>
  <Route path="display" element={<Display/>}/>
  <Route path="update" element={<Update/>}/>
  <Route path="search" element={<Search/>}/>
  <Route path="contact" element={<Contact/>}/>
  <Route path="edit/:id" element={<Edit/>}/>

  </Route>
</Routes>
</BrowserRouter>
 */}



    </>
  )
}









{/* <table cellSpacing={1} border={1} cellPadding={1} align="center">
  <tr>
    <th>Empno</th>
    <th>Name</th>
    <th>Role</th>
    <th>Salary</th>
  </tr>

  {ans}
  
</table> */}

{/* <h1>Welcome</h1>
<table style={{borderCollapse:"collapse" ,border:"1px solid black"}} >
  <tr style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Empno</th>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Name</th>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Department</th>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Salary</th>
  </tr>
  {ans}
</table> */}


{/* <h1>Employee Data</h1>
<table style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
  <tr style={{borderCollapse:"collapse" ,border:"1px solid black"}}>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Product No</th>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Product Name</th>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>Quantity</th>
    <th style={{borderCollapse:"collapse" ,border:"1px solid black"}}>City</th>
  </tr>
  {ans}
</table> */}



{/* <BrowserRouter >
  <Routes>
<Route path="/"  element={<Layout />}>
  <Route index element={<Home/>}/>
  <Route path="home" element={<Home />}/>
  <Route path="about" element={<About />}/>
  <Route path="Projects" element={<Projects />}/>
  <Route path="contact" element={<Contact />}/>
  <Route path="*" element={<NoPage />}/>

</Route>
  </Routes>
</BrowserRouter> */}


{/* 
<BrowserRouter>
  <Routes>
    <Route path="/"  element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Route>
  </Routes>
</BrowserRouter> */}



{/* <h1>Hello</h1> */}
{/* <button onClick={()=>{myname('mayank','pandey')}}>Click Here</button> */}
{/* <button name="mayank" value="96" onClick={display}>click here</button> */}
{/* Enter City : <input type="text" name="mycity" value="bhopal" onChange={handle}/> */}





  
export default App;

// export {usercontext};