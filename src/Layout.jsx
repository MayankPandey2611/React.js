
import {Link,Outlet} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
const Layout = ()=>{
    return(
        <>
        {/* <div id="head">
          <Link to ="home" id="a"> Home </Link> 
          <Link to ="about" id="a" > About </Link>  
          <Link to ="projects" id="a" > projects </Link>  
          <Link to ="services" id="a" > services </Link>  
          <Link to ="contact" id="a"> Contact</Link> 
          </div>
            <br/>

          <Outlet style={{backgroundColor:"yellow"}} />

    <br/>
    <Card className="text-center" style={{color:"white" , backgroundColor:"black"}}>
      
      <Card.Body>
        <Card.Title style={{color:"red"}}>Portfolio</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
          www.mycompany.com @CopyRight All rights reserverd 2025

        </Card.Text>
        <a style={{color:"blue"}}> Facebook&emsp; </a>||
        <a style={{color:"blue"}}>&emsp; Linkedin &emsp;</a>||
        <a style={{color:"blue"}}>&emsp; Github </a>
        <br/>
        <br/>
        <input type='text' placeholder='&emsp;&emsp;Send Message' />&emsp;
        <Button variant="primary">Send</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card> */}


{/* <TopMenu/>
<Outlet/>
<Footer/> */}


<Link to="home"> Home </Link> |
<Link to="insert"> Insert </Link> |
<Link to="display"> Display </Link> |
<Link to="update"> Update </Link> |
<Link to="search"> Search </Link> |
<Link to="contact"> Contact </Link> 

<hr size='4' color='red'/>
<Outlet/>
<hr  size='4' color='red'/>
mycompany.visit.www.google.com @CopyRight 2025

        </>
    )
}

export default Layout;