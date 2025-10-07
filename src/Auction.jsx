import React from 'react'
import { Container,Image , Button} from 'react-bootstrap'
 import Car from './Carousel.jsx';
 import Count from './Count.jsx';
 import Logo from './imgs/Token.png';
 import back from './imgs/back.png';
 import Block from './Block.jsx';
 

const Auction = () => {
  return (
    <Container 
    
    
    style= {{height:'100rem', backgroundImage:{back}, zIndex:'1'}}  
    
    fluid ='true'>
        
         <div  
         
         
         style= {{height:'10rem', backgroundImage:{back}, zIndex:'1',justifyContent:'center'}}  
 > 

 
        <Image 
        style= {{height:'15rem', zindex:'2', }}
        
        src ={Logo} img-fluid    />
            


         </div>
         <Block/>
 
         
     <Button variant/>
     <Count/> 
     <Car/>


    </Container>
  )
}

export default Auction