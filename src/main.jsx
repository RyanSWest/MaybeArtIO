import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import '@solana/wallet-adapter-react-ui/styles.css'

import { About } from './About.jsx'
import Grid  from './Grid.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx';
import '../index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Papers from './paper.jsx'
import MaybeArtLandingPage from './Home2.jsx';
import Landing from './Home3.jsx';
import ImageUpload from './Upload.jsx';
// import NFTMinter from './Nft.jsx'
import Home from './Home';
import Home2 from'./Home2';
import Gallery from './Gallery.jsx';
import DisplayPDFs from './Pdf.jsx'
 import BuyToken from './buyToken.jsx'
// import GalleryNFTMinter from './Minter.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';
import UserContext from './util/userContext.js';
import Auction from './Auction.jsx';
import {useState} from 'react';
import Expo from './util/expo.js';
import {builder} from '@builder.io/react';
import Block from './Block.jsx';
const wallets = [new PhantomWalletAdapter()]
const endpoint = clusterApiUrl('devnet')
 
 createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
 
          <ThemeProvider>  
                      <UserContext.Provider value={{Expo}}  > 

          <Router> 
             <Header/> 
            
            <Routes> 
 
              <Route path='/' element={<Landing/>} />
               <Route path='/landing'element={<App/>}/>
               <Route path='/home' element={<Home/>}/>
                <Route path= '/login' element={<Login/>}/>
                 {/* <Route path='/gallery' element ={<Gallery/>}/> */}
                <Route path='/buyToken' element={<BuyToken/>}/>
                  {/* <Route path ='/mintNft'element ={<GalleryNFTMinter/>}/>  */}
                 {/* <Route path ='/nft' element={<NFTMinter/>}/>   */}
               <Route path ='/upload' element ={<ImageUpload/>}/>
               <Route path='/about' element={<About />} />
              <Route path='/grid' element={<Grid/>}/> 
              <Route path= '/gallery'element={<Gallery/>}/>
              <Route path='/whitepaper' element={<DisplayPDFs/>}/>


              {/* <Route path ='/auction' element={<Auction/>}/> */}
                            <Route path ='/auction' element={<Block/>}/>

                      <Route path ='/register' element ={<Register/>}/>

            </Routes>
             
          </Router>
          </UserContext.Provider>
           </ThemeProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  // </StrictMode>
)