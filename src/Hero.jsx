import { Container, Row, Col, Button, Image , Card, CardImgOverlay,CardImg,Figure} from 'react-bootstrap';
import Token from './imgs/Token.png';
import Car from './Carousel';
 
//  import './Home.css';

const Hero = () => (
  <Container fluid  >
      
      
 <Col> 
 
 <Row> 

   <div className="position-relative">
/ 
  <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
    <h1 className="cyber-text">MaybeArt</h1>
    <p className ='cyber-text'>Turning Creativity in to Currency</p>
  </div>
</div>  

 </Row>
 
 </Col>
       
     
     
                     {/* <Image className='img-fluid' src={Token} roundedCircle/> */}
            
                                    <Image className='tokendog' src={Token} roundedCircle/>
<div className="position-relative margin-top:5rem">
  <img 
    className="img-fluid w-100"
            //  src = 
            // 
      src= 'https://wallpaperaccess.com/full/1519085.jpg'
     alt="Metaverse background"
    style={{height: '25rem', objectFit: 'cover'}}
  />
  <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
    <h1 className="cyber-text">MaybeArt</h1>
    <p className ='cyber-text'>Turning Creativity in to Currency</p>
  </div>
</div>
        
                
                 <Card.Image src=  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1267581.jpg&f=1&nofb=1&ipt=aa181cfe6da00ce24cf94dc42e23309a25a142539d81be4dcb08749df83328a5'/>
'
                
                                             <Button variant="primary" size="md">Buy Token</Button> 
         <Image 
         
         
         src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1267581.jpg&f=1&nofb=1&ipt=aa181cfe6da00ce24cf94dc42e23309a25a142539d81be4dcb08749df83328a5'
         className='img-fluid'
         /> 
         <Car/>

         
            
       
       
 
     
   
  </Container>
);
export default Hero