import React, { useState, useEffect } from 'react'
import './index.css';
import '@solana/wallet-adapter-react-ui/styles.css';
import {WalletMultiButton} from '@solana/wallet-adapter-react-ui';
export default function WalletButton() {
  const [showWallets, setShowWallets] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [wallet, setWallet] = useState(null)
  const [balance, setBalance] = useState(null)

  // useEffect(() => {
  //   // Check if already connected
  //   if (window.solana && window.solana.isConnected) {
  //     setWallet(window.solana.publicKey.toString())
  //     getBalance()
  //     showDetails(true)
  //   }
  // }, [])

 const getBalance = async () => {
  if (window.solana && window.solana.publicKey) {
    try {
      const response = await fetch('https://api.devnet.solana.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'getBalance',
          params: [window.solana.publicKey.toString()]
        })
      });
      const data = await response.json();
      if (response.ok) {
        setBalance((data.result.value / 1000000000).toFixed(4));
        console.log('Balance fetched:', data.result.value);
      } else {
        console.error('Error fetching balance:', data.error);
      }
    } catch (err) {
      console.error('Balance fetch failed:', err);
    }
  }
};


    useEffect(() => {
    // Check if already connected
    if (window.solana && window.solana.isConnected) {
      setWallet(window.solana.publicKey.toString())
      getBalance()
      // showDetails(true)
    }
  }, [])

  const connectPhantom = async () => {
    if (window.solana) {
      try {
        const response = await window.solana.connect()
        setWallet(response.publicKey.toString())
        console.log("WALLET",response.publicKey.toString())
        setShowWallets(false)
        getBalance()


        console.log("YO MOFO", balance)
      } catch (err) {
        console.error('Phantom connection failed:', err)
      }
    } else {
      alert('Phantom wallet not found! Please install it.')
    }
  }

  

  const connectSolflare = async () => {
    if (window.solflare) {
      try {
        const response = await window.solflare.connect()
        setWallet(response.publicKey.toString())
        setShowWallets(false)
        getBalance()
      } catch (err) {
        console.error('Solflare connection failed:', err)
      }
    } else {
      alert('Solflare wallet not found! Please install it.')
    }
  }

  const disconnect = () => {
    if (window.solana) {
      window.solana.disconnect()
      setWallet(null)
    }

    console.log('showDetails:', showDetails, 'wallet:', wallet)
  }
 

  return (
    <div  >
      <p> balance</p>  {balance}

      {/* <WalletMultiButton/> */}
        {showDetails&& ( 

          <div> 
            <h2 className='terminal-text'>Connected</h2>
            <h2 className= 'terminal-text'> 
              Balance:  {balance}
            </h2>
             </div>
        )}
         
       <button className='cyberpunk-button'
    
        onClick={() => wallet ? disconnect() : setShowWallets(!showWallets)}>
   
        {wallet ? `${wallet.slice(0,4)}...${wallet.slice(-4)}` : 'Connect Wallet'}

        {/* <h3 className ='cyberpunk-h2'>Connect Wallet</h3> */}
      </button>
      
      {showWallets && !wallet && (
        <div style={{
          position: 'absolute',
          top: '10%',
          right: 0,
          background: '#1f2937',
          border: '1px solid #374151',
          borderRadius: '6px',
          padding: '.25rem',
          zIndex: 1000,
          minWidth: '150px'
        }}>
          <div 
            onClick={connectPhantom}
            style={{ 
              padding: '2rem 4rem', 
              cursor: 'pointer', 
              color: 'white',
              borderRadius: '4px',
              marginBottom: '4px'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#374151'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            🟣 Phantom
          </div>
          <div 
            onClick={connectSolflare}
            style={{ 
              padding: '2rem 4rem', 
              cursor: 'pointer', 
              color: 'white',
              borderRadius: '4px'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#374151'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            🟡 Solflare
          </div>
        </div>
      )}
    </div>
  )
}