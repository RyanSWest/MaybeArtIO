import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import{Navbar,Button,Image} from 'react-bootstrap';
import Logo from './imgs/Logo.png'
function Footer() {
  return (
    <div className= 'nav'>  
 <Navbar  > 

  <Navbar.Brand> <Image src ={Logo}  style={{height:'5rem',padding:'.5rem'}} roundedCircle />Copyright 2025 MaybeArt</Navbar.Brand>
  <Navbar.Text> Contact info@maybeart.io</Navbar.Text>  
          {/* <Button variant="primary">   <Navbar.Link>    
              Upload Your Art! 
            
            </Navbar.Link> </Button> */}

 </Navbar>    

 </div>
  );
}

export default Footer;