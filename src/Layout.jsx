
import {Link,Outlet} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Layout = ()=>{
    return(
        <>
        <div id="head">
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
    </Card>
        </>
    )
}

export default Layout;