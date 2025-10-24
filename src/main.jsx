// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import '@solana/wallet-adapter-react-ui/styles.css'

import { UserAuthProvider } from './util/UserContextProvider.jsx';
import { About } from './About.jsx'
import Grid from './Grid.jsx'
import HeroCTA from './copy.jsx';
import NewPage from './NewPage.jsx'
import Login from './Login.jsx'
import '../index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Papers from './paper.jsx'
import Landing from './Home3.jsx'
import ImageUpload from './Upload.jsx'
import Home from './Home'
import Gallery from './Gallery.jsx'
import PayPalTokenPurchase from './pay.jsx'
import DisplayPDFs from './Pdf.jsx'
import BuyToken from './buyToken.jsx';
import Register from './Register.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'react-bootstrap'
// import UserContext from './util/userContext.js'
import Auction from './Auction.jsx'
import { useState } from 'react'
import Expo from './util/expo.js'
import { builder } from '@builder.io/react'
import TransferToken from './BuyIt.jsx'
import Block from './Block.jsx';
 import StripeForm  from './StripeForm.jsx';
 import BuyTokens from './StripeForm.jsx';
import StripePaymentForm from './StripeForm.jsx'
import TokenExchange from './usdc.jsx';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Header2 from './Header2.jsx';
import TestPayPal from './buyToken.jsx';
// import MaybeArtLanding from './Ozz.jsx'
// const stripePromise =  loadStripe('pk_live_51J8tvhBaRV6ucR0OPtOmn7BsXPaNLPzSt6hswYJelRzOQZUykfCHHPp1q6YXYYaMP8Ehz3IDuwqPvhVFkdHY4Zny00VOS91sxQ'

// )

const stripePromise = loadStripe('pk_test_51J8tvhBaRV6ucR0OrArDHIRwgEmvaEbpoAwNI8lAgkgkDBaIobUPUQG2OlNLgvxa2nhy5GkowyB9Al2Oi5fq2NH600f28HxBnx')
const wallets = [new PhantomWalletAdapter()]
const endpoint = clusterApiUrl('devnet')

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets}>
      <WalletModalProvider>
                <Elements stripe={stripePromise}>

        <UserAuthProvider>
          <ThemeProvider>
            <Router>
                <Header2 />

                <Routes>
                  <Route path ='/' element ={<NewPage/>} />
                  <Route path ='/copy'element={<HeroCTA/>}/>
                  <Route path='/new' element={<NewPage />} />
                  <Route path='/landing' element={<App />} />
                  <Route path='/home' element={<HeroCTA />} />
                  <Route path ='/us'element={<TokenExchange/>}/>
                  <Route path='/login' element={<Login />} />
                  <Route path ='/register' element={<Register/>}/>
                  <Route path ='/buy' element ={<TestPayPal/>}/>
                  <Route path='/buyToken' element={<PayPalTokenPurchase />} />
                  <Route path ='/buy' element={<BuyToken />}/>
                  <Route path ='/faggy' element ={<StripePaymentForm/>} />
                  <Route path='/upload' element={<ImageUpload />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/grid' element={<Grid />} />
                  <Route path='/gallery' element={<Gallery />} />
                  <Route path='/whitepaper' element={<DisplayPDFs />} />
                  <Route path='/auction' element={<Block />} />
                </Routes>
              </Router>
           </ThemeProvider>
        </UserAuthProvider>
        </Elements>
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
  // </StrictMode>
)