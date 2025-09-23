import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import Header from './Header.jsx';
import Vitamin from "./imgs/Vitamin.jpg";
import Cover from "./imgs/Cover.jpg";
import Diego2 from "./imgs/Diego2.jpg";
import "./index.css";
import Drag from "./imgs/COLORED DRAGON13.jpg";
import Rodan from "./imgs/Rodan3.jpg";
import Rhino from "./imgs/RHINOGUN9.jpg";
import Gorilla from "./imgs/Gorilla1.jpg";
import AngryGorr from "./imgs/Gorilla-MAD11.jpg";
import Chimp from "./imgs/Chimp2.jpg";
import Rath from "./imgs/RathScreenshot.png";
import Drag3 from "./imgs/DragonSP1.jpg";
import Bear from "./imgs/Bear6.jpg";
import Kaiju from "./imgs/kaiju2.jpg";
import Drag2 from "./imgs/Dragon2.jpg";
import Token from "./imgs/Token.png";
import Mono from "./imgs/mono.jpg";
import Taco from"./imgs/TACO.jpg";
import Orang from './imgs/Orang2.jpg';
import Baby from'./imgs/Baby.jpg';
import Raijin from'./imgs/Raijin.jpg';
import Rabbit from'./imgs/Rabbit.jpg';
import Wombat from'./imgs/Wombat.jpg';
import Bunny from'./imgs/Bunny.jpg';
import Icecream from'./imgs/Icecream.jpg';
import Scrawny from'./imgs/Scrawny.jpg';
import Butler from './imgs/Butlerpic.jpg';
 import {About} from './About.jsx'; 
import React, { useState, useEffect } from 'react'


import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { clusterApiUrl } from '@solana/web3.js'
import TransactionButton from './TransactionButton.jsx'
import WalletButton from './WalletButton.jsx';
 
function App() { 


  const [connected, setConnected] = useState(false)

useEffect(() => {
  if (window.solana) {
    window.solana.on('connect', () => setConnected(true))
    window.solana.on('disconnect', () => setConnected(false))
    
    // Check if already connected
    if (window.solana.isConnected) {
      setConnected(true)
    }
  }
}, [])

  const network = WalletAdapterNetwork.Devnet
  const endpoint = clusterApiUrl(network)

  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter({ network }),
  ]

  var now = new Date().getTime();
  var countDownDate = new Date("Oct 31, 2025 15:37:25").getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
 
          <div class-name='main-wrapper'  >

         {/* <Header/> */}
          
          <Header/>
             <WalletButton/>
           
            

            <div className="bitch">
              <img src={Token} alt="Token" className="token-image" />
  
            <div className="bitch2">

            
  
              <h1 className="cyberpunk-h2-glitch" data-text='MAYBEART'>MAYBE ART</h1>
                 <p className='terminal-text'> MAYBEART is a cryptocurrency on the Solana blockchain, backed by art. We empower artists and collectors through a marketplace where creators can sell their works, share royalties, and collaborate with a community that fuels innovation and growth.

</p>
            </div>


            </div>
            
              <div className="whatis">
              <h1 className="cyberpunk-span">WHAT IS MAYBEART?</h1>
              <p className="terminal-text">
               MAYBEART is a cryptocurrency on the Solana blockchain, backed by art, blending the worlds of blockchain and creativity. Our community empowers musicians, visual artists, collectors, and fans by providing a marketplace where creators can showcase and sell their works. Beyond traditional sales, artists can also offer fractional ownership of their music royalties, publishing rights, or artworks, giving supporters a direct stake in their success. Through grants, community-driven initiatives, and innovative token-powered projects, MAYBEART fosters a collaborative space where art and technology thrive together.


              </p>
              
            </div>
             

            <div className="buttons">
              <button className="gallery-button">BUY MAYBEART TOKEN</button> 
               <Link to ='/about'>
                <button className="gallery-button">MEET THE TEAM</button>
              </Link>
              <button className="gallery-button">Upload
                 and Get Paid</button>
            </div>
            
            <div className="countdown">
              <h2 className="cyberpunk-span-blue">Countdown to October 30 Auction</h2>
            </div>
            
            <div className="countdown">
              <h2 className="cyberpunk-span-ice">Art and Music Drops </h2>
            </div>
            
            <div className="countdown-container">
              <div className="time">
                <h1 className="time-unit">{days} :</h1>
                <h1 className="time-unit-small">DAYS </h1>
              </div>
              <div className="time">
                <h1 className="time-unit">{hours} :</h1>
                <h1 className="time-unit-small">HRS </h1>
              </div>
              <div className="time">
                <h1 className="time-unit">{minutes}</h1>
                <h1 className="time-unit-small">MIN</h1>
              </div>
              <div className="time">
                <h1 className="time-unit">{seconds}</h1>
                <h1 className="time-unit-small">SEC</h1>
              </div>
            </div>

           
            </div>


            <div className='peices'> 
            <div className ='image-card'> 
           <img src= {Butler}
            className='momo'
           />     
           {/* <h1 className="cyberpunk-span">Vitamin</h1> */}
           <div className="image-text">
                    <p className='terminal-text'>John Butlers first show with the John Butler Trio!</p>
                </div>
            </div> 

               <div className ='image-card'> 
                <img src={Mono} className='momo'/>
                     <div className="image-text">
                   <p className='terminal-text'>Mono/Poly's New Album!!</p>
                </div>
            </div>
            <div> </div>
            
           

            {/* <div className="peices">
              <div className="image-card">
                <img src={Vitamin} alt="WF" />
                <div className="image-text">
                  <h2 className="cyberpunk-label">VITAMIN LIVE RECORDING</h2>
                  <p>John Butlers first show with the John Butler Trio!</p>
                </div>
              </div>

              <div className="image-card">
                <img src={Cover} />
                <div className="image-text">
                  <h2 className="cyberpunk-label">VITAMIN ALBUM</h2>
                  <p>John Butlers unreleased first studio album Recording!</p>
                </div>
              </div>

              <div className="image-card">
                <img src={Diego2} />
                <div className="image-text">
                  <h2 className="cyberpunk-label">TOP MUSIC AND ART</h2>
                  <p> Kalu James, Diego Rivera, DJ MCO, ThunderCat and More</p>
                </div>
              </div>
            </div> */}
            
 
            <div className="assets">
              <h2 className="cyberpunk-span-intense-cyan">BROWSE ASSETS</h2>
              
              {/* <button className="gallery-button">Gallery</button> */}
            </div>
            <div className ='assets'> 
              

            </div>
            
             <div className="small-pics">
              <div className="image-wrapper">
                <img src={Baby} alt="Art 1" />
              </div>
              <div className="image-wrapper">
                <img src={Taco} alt="Art 2" />
              </div>
              <div className="image-wrapper">
                <img src={Orang} alt="Art 3" />
              </div>
              {/* {/* <div className="image-wrapper">
                <img src={Bunny} alt="Art 3" />
              </div>
              <div className="image-wrapper">
                <img src={Gorilla} alt="Art 3" />
              </div>  
              <div className="image-wrapper">
                <img src={Raijin} alt="Art 3" />
              </div>
              <div className="image-wrapper">
                <img src={Scrawny} alt="Art 3" />
              </div>
              <div className="image-wrapper">
                <img src={Rath} alt="Art 3" />
              </div>
              <div className="image-wrapper">
                <img src={Bear} alt="Art 3" />
              </div>
              <div className="image-wrapper">
                <img src={Kaiju} alt="Art 3" />
              </div>
              <div className="image-wrapper">
                <img src={Drag2} alt="Art 3" />
              </div>
              <div className="image-wrapper">
                <img src={Drag} alt="Art 3" />
              </div>
              <div className="image-wrapper">
                <img src={Drag2} alt="Art 3" />
              </div>
              <div className="image-wrapper">
                <img src={Drag3} alt="Art 3" />
              </div> 
              <div className="image-wrapper">
                <img src={Rhino} alt="Art3"/>
              </div>
              <div className="image-wrapper">
                <img src={Rabbit} alt="Art3"/>
              </div>
              <div className='image-wrapper'> 
                <img src={AngryGorr} alt='img1'/>
              </div> 
              <div className='image-wrapper'> 
                <img src={Wombat} alt='img1'/>
              </div> */}
            </div> 
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;