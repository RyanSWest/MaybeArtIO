import React from 'react'
import {Image, Container}from 'react-bootstrap';
import Neon from  './imgs/maybe.jpg';

export default function MaybeNeon() {


  return (
    <Container fluid> 

    <Image className='img-fluid' src = {Neon}/>

    

    </Container>
  )
}
