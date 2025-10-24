  

import React from 'react';
import { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './new.css';
import Faint from './imgs/BigOne.jpg';
import Rabbit from './imgs/Bunny.jpg';
 import Block from './Block';
 import Ice from './imgs/Ice.jpg';
// import {Scrollbars} from 'react-scrollbars';
import './ozz.css';
import './maybeart.css'
import HeroCTA from './copy.jsx';
import HeroSub from './copy2.jsx';
import Car from './Carousel.jsx';
import Count from './Count.jsx';
const images = [
  './imgs/Ice.jpg',
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
     
    <Container className='scrollable' fluid>  

    
    {/* <Scrollbars style ={{width:'100%',  height:'400rem'}}>  */}
    <section className="hero-section">

        <div className="maybe-art-title-wrapper">
{/*           
              <h1
        className="text-[6rem] font-extrabold uppercase relative"
        style={{
          fontFamily: "Anton, sans-serif", // wider font
          letterSpacing: "0.2em",           // more space between letters
          color: "transparent",             // hollow letters
          WebkitTextStroke: "3px #ff00c8",  // thick pink outline
          textShadow: `
            0 0 10px #ff00c8,
            0 0 20px #ff00c8,
            0 0 40px #ff00c8,
            0 0 80px #ff00c8
          `,
        }}
      // > */}
 
      <h1
        className="text-8xl font-extrabold uppercase relative"
        style={{
          color: "transparent",
          fontFamily:'Rajdhani',
          fontSize: '6rem',
          marginTop:'10rem',
          
           

          WebkitTextStroke: "2px #ff00c8",
          textShadow: `
            0 0 8px #ff00c8,
            0 0 16px #ff00c8,
            0 0 32px #ff00c8,
            0 0 64px #ff00c8
          `,
        }}
      >
        MAY BE ART
      </h1>              {/* <div className="maybe-art-reflection"></div> */}
            </div>
  {/* <h1 className="strokeme">MAYBEART</h1> */}
  

  <div className="new-subtitle">Turning Creativity Into Currency</div>

  <div className="carousel-container">
    <img src= {Ice} alt="Featured Art 1"/>
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
<HeroCTA/>
  <Car/>
  <HeroSub/> 
  <Count/>
  <HeroCTA/>

  <HeroSub/>
<HeroCTA/>
 
<Block/>
</section>
{/* </Scrollbars> */}
 
 
 


<section> 





</section>
</Container>
  );
}
