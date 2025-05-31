
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/img1.jpeg"
import img2 from "../images/img2.jpg"

import i1 from "../images/i1.webp"
import i2 from "../images/i2.webp"
import i3 from "../images/i3.webp"
const Banner = ()=>{
    return(
        <>



    <Carousel>
      <Carousel.Item>
     
<img src={i1} width="100%" height="400"/>

        <Carousel.Caption>

          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     
<img src={i2} width="100%" height="400"/>

        <Carousel.Caption>

          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
<img src={i3} width="100%" height="400"/>
       
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
    <br/>
    <br/>
        </>
    )
}

export default Banner;