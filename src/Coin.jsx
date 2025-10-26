import React from 'react';
import './Hero.css';
import Logo from './imgs/Logo.png';

export default function HeroCoin() {
  return (
    <section className="hero-coin-section">
      <div className="hero-coin-container">
        <div className="coin-container">
          <div className="coin">
            <img src={Logo} alt="Logo" className="coin-logo" />
          </div>
        </div>
        <div className="hero-word">
          <h1 className = 'hero-title'>Turning creativity into currency</h1>
          <p>Join MaybeArt.IO and start minting, trading, and creating today.</p>
        </div>
      </div>
    </section>
  );
}
