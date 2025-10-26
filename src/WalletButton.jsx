import React, { useState, useEffect, useRef } from "react";
import './index.css';
import '@solana/wallet-adapter-react-ui/styles.css';

export default function WalletButton() {
  const [showWallets, setShowWallets] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [wallet, setWallet] = useState(null);
  const [balance, setBalance] = useState(null);

  const dropdownRef = useRef(null);

  // Fetch balance
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
          setBalance((data.result.value / 1_000_000_000).toFixed(4));
        }
      } catch (err) {
        console.error('Balance fetch failed:', err);
      }
    }
  };

  // Check if already connected
  useEffect(() => {
    if (window.solana && window.solana.isConnected) {
      setWallet(window.solana.publicKey.toString());
      setShowDetails(true);
      getBalance();
    }
  }, []);

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowWallets(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const connectPhantom = async () => {
    if (window.solana) {
      try {
        const response = await window.solana.connect();
        setWallet(response.publicKey.toString());
        setShowWallets(false);
        setShowDetails(true);
        getBalance();
      } catch (err) {
        console.error('Phantom connection failed:', err);
      }
    } else {
      alert('Phantom wallet not found! Please install it.');
    }
  };

  const connectSolflare = async () => {
    if (window.solflare) {
      try {
        const response = await window.solflare.connect();
        setWallet(response.publicKey.toString());
        setShowWallets(false);
        setShowDetails(true);
        getBalance();
      } catch (err) {
        console.error('Solflare connection failed:', err);
      }
    } else {
      alert('Solflare wallet not found! Please install it.');
    }
  };

  const disconnect = () => {
    if (window.solana) window.solana.disconnect();
    setWallet(null);
    setBalance(null);
    setShowDetails(false);
  };

  return (
    <div ref={dropdownRef} style={{ position: "relative", display: "inline-block" }}>
      {showDetails && wallet && (
        <div className="terminal-text" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          <div>Connected</div>
          <div>Balance: {balance}</div>
        </div>
      )}

      <button
        className="cyberpunk-button"
        onClick={() => setShowWallets(!showWallets)}
      >
        {wallet ? `${wallet.slice(0, 4)}...${wallet.slice(-4)}` : 'Connect Wallet'}
      </button>

      {showWallets && !wallet && (
        <div
          style={{
            position: 'fixed',
            top: '60px',
            right: '1rem',
            background: '#1f2937',
            border: '1px solid #374151',
            borderRadius: '6px',
            padding: '0.5rem',
            zIndex: 1000,
            minWidth: '150px',
          }}
        >
          <div
            onClick={connectPhantom}
            className="wallet-option"
          >
            🟣 Phantom
          </div>
          <div
            onClick={connectSolflare}
            className="wallet-option"
          >
            🟡 Solflare
          </div>
        </div>
      )}
    </div>
  );
}
