import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/fontawesome.min.css
const Footer=()=>{
    return(
        <>
            <Card className="text-center" style={{color:"white" , backgroundColor:"black"}}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title style={{color:"red"}}>Portfolio</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <a style={{color:"blue"}}> Facebook </a>||
        <a style={{color:"blue"}}> Linkedin </a>||
        <a style={{color:"blue"}}> Github </a>
        <br/>
        <br/>
        <input type='text' placeholder='Send Message' />
        <Button variant="primary">Send</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    
        </>
    )
}
export default Footer;