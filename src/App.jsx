

// import TopMenu from "./components/TopMenu";
// import Banner from "./components/Banner";
// import MyCard from "./components/MyCard";
// import Footer from "./components/Footer";

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


import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import NoPage from "./NoPage";

const App =()=>{

  return (

<>

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



<BrowserRouter >
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
</BrowserRouter>


</>

  )
}
  
export default App;