import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import '@solana/wallet-adapter-react-ui/styles.css'

import { About } from './About.jsx'
import { Grid } from './Grid.jsx'
import './index.css'
import App from './App.jsx'

const wallets = [new PhantomWalletAdapter()]
const endpoint = clusterApiUrl('devnet')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <Router>
            <Routes>
              <Route path='/' element={<App />} />
              <Route path='/about' element={<About />} />
              <Route path='/grid' element={<Grid/>}/>
            </Routes>
          </Router>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  </StrictMode>
)