import React from 'react'
import {Image, Container}from 'react-bootstrap';
import Neon from  './imgs/maybe.jpg';
import Dapp from './Page.jsx';
import './index.css';
import Dap2 from './Dap2.jsx';
import Bricks from './Bricks.jsx';
import AppHero from './NewPage.jsx';
export default function MaybeNeon() {


  return (
    <Container className = 'scrollable' style={{width:'100%',paddingTop:'8rem',height:'1000vh'}} fluid> 

    <Image className='img-fluid' src = {Neon}/>
    <section> 
        <Bricks/>
        <AppHero />
      <Dap2/> 


       

    </section>
     
      
      <div> 



        {/* <Dapp/> */}
      </div>

    </Container>
  )
}
