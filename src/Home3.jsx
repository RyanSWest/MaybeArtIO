import React, { useState, useEffect } from 'react';
 import './index.css';

import './new.css';
 import back from './imgs/back.png';
import Guy from './imgs/IMG_1720.JPG'
import {Navbar,NavItem,Nav,NavDropdown, Container} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
 
 

 export default function Landing() {
  return (
    <Container style= {{flexGrow:'1'}} fluid>

       
 <div style={{
  position: 'fixed',
  top: 0,
  left: 0,
  flex:1,
  width: '100vw',
  height: '100vh',
  paddingTop:'3rem',
    opacity:'0.9',
   zIndex: 1,
  pointerEvents: 'none'
}} />

{/* Background Layer 2: Semi-transparent Image */}
{/* Background Layer 2: Semi-transparent Image */}
<div style={{
  position: 'fixed',
  flex:'1',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  opacity:0.5,
  backgroundImage:
     `url(${Guy})`,
  
  // 'url("https://wallpaperaccess.com/full/1267581.jpg")',
  // './imgs/back.png',
        // backgroundImage: 'url(https://wallpaperaccess.com/full/1519085.jpg)',
 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  opacity: '0.6',
  zIndex: 2,
  pointerEvents: 'none'
}} > 
 


</div>



 <div style={{  flex:'1',position: 'relative', zIndex: 3, justifyContent:'center',alignContent:'center' }}>
        {/* Your gallery, forms, etc. */}
 {/* <img src = {back}
 style={{position:'relative',className:'img-fluid',
   opacity: 0.3,
  zIndex: 2,



 }}
  */}
 {/* /> */}
          <h1 
          
          className="hero-title" 
b          
          
          >
              The Maybe Art Token
               </h1>
             

                   <h2  className='hero-sub'> Turning Creativity     
                   <span>   </span>
                                                       <span  className='hero-sub'
                                                      >  in to Currency</span> 
                                                       
                                     </h2>
       </div>


       
     <Footer/>
       
     </Container>
  );
}