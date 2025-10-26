  

import React from 'react';
import { useEffect, useState } from 'react';
import {Container,Card, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './new.css';
import Faint from './imgs/BigOne.jpg';
import Rabbit from './imgs/Bunny.jpg';
 import Block from './Block';
 import Ice from './imgs/Ice.jpg';
 import Logo from './imgs/neon.png';
 import  Rodan from './imgs/Rodan3.jpg';
// import {Scrollbars} from 'react-scrollbars';
import './ozz.css';
import './maybeart.css'
import HeroCTA from './copy.jsx';
import HeroSub from './copy2.jsx';
import Car from './Carousel.jsx';
import Count from './Count.jsx';
import HeroCoin from './Coin.jsx';
import './hero.css';
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
    <div className ='logo'> <Image src ={Logo}/></div>
 
   
  
  <div className ='section8'>  
    
    <div className='hero-buttons'>  
       <Link to ="/grid" className='buy'> View Gallery</Link>
 
    <Link to ='/register' className ='artist'>CREATE ARTIST PAGE</Link>
    <Link to ='/buyToken' className ='buy'> BUY $MAYBEART TOKEN </Link>
    </div>
   
    
  <div className="carousel-container">
    <img className ='responsive-image' src= {Ice} alt="Featured Art 1"/>
     <img className= 'repsonsive-image'src= {Rabbit} alt="Featured Art 3"/>
     <img  className =' responsive-image'src={Rodan} alt='Featured Art4'/>

  </div>
   <div className="hero-buttons">
    {/* <a href="/whitepaper" className="whitepaper">READ WHITEPAPER</a> */}

    <Link to ="/whitepaper" className='whitepaper'> READ WHITEPAPER</Link>
 
    <Link to ='/login' className ='artist'>Login to ARTIST PAGE</Link>
    <Link to ='/buyToken' className ='buy'> John Butler Presale! </Link>
    {/* <a href="/buytoken" className="buy">BUY $MAYBEART TOKEN</a> */}
  </div>
  </div>
<HeroCoin/>

<div
  style={{
    position: "relative",
    width: "clamp(300px, 60vw, 1000px)", // scales between 300px and 1000px depending on screen width
    height: "clamp(200px, 40vw, 700px)", // scales height proportionally
    margin: "2rem auto",
    borderRadius: "clamp(8px, 1.5vw, 20px)",
    overflow: "hidden",
    border: "2px solid #ff007f",
    boxShadow: "0 0 20px rgba(255, 0, 127, 0.4)",
    transition: "all 0.3s ease-in-out",
  }}
>
  {/* Background image */}
  <img
    src="https://tse3.mm.bing.net/th/id/OIP.2t27fF_lrU7G39IWuchPOAHaDd?pid=Api&P=0&h=220"
    alt="Maybe Art"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      filter: "brightness(85%)",
    }}
  />

  {/* Text overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      textAlign: "center",
      background: "transparent",
    }}
  >
    <p
      style={{
        color: "white",
        fontSize: "1.3rem",
        fontWeight: "600",
        lineHeight: "1.5",
        fontFamily:'Rajdhani',
        textShadow:
          "0 0 20px #ff007f, 3px 3px 10px black, -2px -2px 10px black, 2px 2px 10px black",
        background: "transparent",
        margin: 0,
      }}
    >
      MAYBEART is a cryptocurrency on the Solana blockchain, backed by art,
      blending the worlds of blockchain and creativity. Our community empowers
      musicians, visual artists, collectors, and fans by providing a marketplace
      where creators can showcase and sell their works.
    </p>
  </div>
</div>
<Count/>


 <HeroCTA/>
    
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
          fontSize: '3rem',
          marginTop:'1rem',
          
           

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
  
   <Car/>
    
 
 
 
</section>
{/* </Scrollbars> */}
 
 
 


<section> 

  <Car/>
  <HeroSub/> 
  <Count/>



</section>
</Container>
  );
}
