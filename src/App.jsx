


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Insert from "./Pages/insert";
import Display from "./Pages/display";
import Layout from "./Layout";
import Update from "./Pages/Update";
import Search from "./Pages/Search";
import Contact from "./Pages/Contact"
import Edit from "./Pages/Edit";
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



const App = ()=>{
  return(
    <>


<BrowserRouter> 
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