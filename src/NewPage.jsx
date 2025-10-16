  

import React from 'react';
import { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './new.css';
import Faint from './imgs/BigOne.jpg';
import Rabbit from './imgs/Bunny.jpg';
import ICE from './imgs/BigTwo.jpg';
import Block from './Block';
import {Scrollbars} from 'react-scrollbars';

const images = [
  './imgs/Faint.jpg',
  './imgs/Logo.png',
  './imgs/kaiju2.jpg'
];

export default function MaybeArtHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
     
    <Container className='fluid'>  
    <Scrollbars style ={{width:'100%',  height:'400rem'}}> 
    <section className="hero-section">
  <h1 className="strokeme">MAYBEART</h1>
  <div className="new-subtitle">Turning Creativity Into Currency</div>

  <div className="carousel-container">
    <img src= {Faint} alt="Featured Art 1"/>
    <img src= {ICE} alt="Featured Art 2"/>
    <img src= {Rabbit} alt="Featured Art 3"/>
  </div>

  <div className="hero-description">ARTISTS & MUSICIANS</div>
  <ul className="hero-bullets">
    <li>Upload & Get Paid</li>
    <li>Unreleased Tracks by John Butler, DJ MC O</li>
    <li>Featured Works by Ryan West • Mint NFTs</li>
    <li>Sell Art</li>
  </ul>

  <div className="hero-buttons">
    {/* <a href="/whitepaper" className="whitepaper">READ WHITEPAPER</a> */}
    <Link to ="/whitepaper" className='whitepaper'> READ WHITEPAPER</Link>
 
    <Link to ='/upload' className ='artist'>CREATE ARTIST PAGE</Link>
    <Link to ='/buyToken' className ='buy'> BUY $MAYBEART TOKEN </Link>
    {/* <a href="/buytoken" className="buy">BUY $MAYBEART TOKEN</a> */}
  </div>
</section>
</Scrollbars>
<Block/>
 


<section> 





</section>
</Container>
  );
}
