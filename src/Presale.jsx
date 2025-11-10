import React from 'react';
import {Link} from 'react-router-dom';
import Count from './Count.jsx';
import './login.css';
import {Button,Card,Container,Image} from'react-bootstrap';
import  Butler from './imgs/Butlerpic.jpg'

function Presale() {
  return (

    <Container className='login-container d-flex flex-column align-items-center justify-content-center'>
                <h2 className ='login-title'>  Presale</h2>    

        <Image   src={Butler} style={{objectFit:'cover', height:'10vh', borderRadius:'10px'}} roundedCircle/>
        
      <p className ='terminal-text'> Bid on the historical recording of iconic 5x platinum artist John Butler's first show. This recording has 5 songs written and performed by John Butler and      MC O that have never been released. </p>
          
        <Count/>
             {/* <Image  src={Butler} style={{objectFit:'cover', height:'40vh', borderRadius:'10px'}} roundedCircle/> */}
            
             <div className="d-grid gap-2">
                            <Link to = 'https://www.paypal.com/ncp/payment/DRS7FD5TEYHDS'> 
{/* 
      <Button variant="primary" size="lg">
       Order Now!
      </Button> */}
      <button className ='cyberpunk-button'> Order Now!  </button>
       </Link>
      
    </div>

    </Container>

 
  )
}

export default Presale