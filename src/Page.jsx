import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import './index.css'
import {Button, Card} from 'react-bootstrap'
import MaybeNeon from './MaybeNeon';
export default function DApp() {
  const [email, setEmail] = useState('');
  const [wallet, setWallet] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [buttonHovered, setButtonHovered] = useState(false);

  const initialOptions = {
    clientId: 'YOUR_PAYPAL_CLIENT_ID',
    currency: 'USD',
    intent: 'capture',
  };

  const handlePreSubmit = () => {
    if (!email || !wallet) {
      alert('Please enter both your email and Solana wallet address before purchasing.');
      return;
    }
    setSubmitted(true);
  };

  const features = [
    { icon: '🖼️'},<h3 className ='cyberpunk-span'  >Mint NFTS</h3>,
 <Button variant='outline-primary'><h3 className ='cyberpunk-text'> Music and media releases</h3> </Button>,
 <Button varaint='secondary'> Physical Right and Copyright Sale</Button>,
     { icon: '🛍️', text: 'Physical art & copyright sales' },
    { icon: '📡', text: 'Music and media releases' }
  ];

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div style={{
       display: 'flex',               // make as flex container
  flexDirection: 'column',       // stack children vertically
  justifyContent: 'center',      // centre vertically
  alignItems: 'center',          // centre horizontally
  minHeight: '100vh',            // fill full height of viewport
  background: '#000000',         // dark background
  backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(88, 28, 135, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)',
  color: '#ffffff',
  padding: '32px',
  fontFamily: 'Rajdhani, "Segoe UI", Roboto, sans-serif'
      }}>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <header style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ marginBottom: '32px' }}>
              <img 
                src="/may-be-art-neon.png" 
                alt="MAYBE ART" 
                style={{ 
                  width: '320px', 
                  maxWidth: '100%', 
                  margin: '0 auto',
                  display: 'block',
                  filter: 'drop-shadow(0 0 30px rgba(147, 51, 234, 0.6))'
                }} 
              />
            </div>
            
            <h1 style={{
              fontSize: '64px',
              fontWeight: '900',
              background: 'linear-gradient(90deg, #a78bfa 0%, #ec4899 50%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              marginBottom: '16px',
              letterSpacing: '2px'
            }}>
              MAYBEART
            </h1>
            
            <div style={{
              height: '3px',
              width: '150px',
              background: 'linear-gradient(90deg, transparent, #9333ea, transparent)',
              margin: '0 auto 32px'
            }}></div>
            
            <p style={{
              maxWidth: '800px',
              margin: '0 auto 32px',
              fontSize: '18px',
              color: '#d1d5db',
              lineHeight: '1.8'
            }}>
              MAYBEART is a next-generation blockchain platform that empowers artists, musicians, and collectors.
              Our upcoming launch will introduce:
            </p>
            
            {/* Features Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              maxWidth: '900px',
              margin: '32px auto',
              textAlign: 'left'
            }}>
              {features.map((item, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: hoveredCard === idx 
                      ? 'linear-gradient(135deg, rgba(88, 28, 135, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%)'
                      : 'linear-gradient(135deg, rgba(88, 28, 135, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)',
                    border: hoveredCard === idx 
                      ? '1px solid rgba(147, 51, 234, 0.7)' 
                      : '1px solid rgba(147, 51, 234, 0.3)',
                    borderRadius: '16px',
                    padding: '20px',
                    transition: 'all 0.3s ease',
                    transform: hoveredCard === idx ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: hoveredCard === idx 
                      ? '0 10px 30px rgba(147, 51, 234, 0.4)' 
                      : 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '28px', marginRight: '12px' }}>{item.icon}</span>
                  <span style={{ color: '#e5e7eb', fontSize: '16px' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </header>

          {/* Main Purchase Section */}
          <section style={{
            background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.5) 0%, rgba(0, 0, 0, 0.9) 100%)',
            border: '2px solid rgba(147, 51, 234, 0.5)',
            borderRadius: '24px',
            padding: '48px',
            maxWidth: '600px',
            margin: '0 auto',
            boxShadow: '0 20px 60px rgba(147, 51, 234, 0.4)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #9333ea, #ec4899)',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: '700',
                padding: '8px 24px',
                borderRadius: '20px',
                marginBottom: '24px',
                boxShadow: '0 4px 15px rgba(147, 51, 234, 0.5)',
                letterSpacing: '1px'
              }}>
                EXCLUSIVE PRE-ORDER
              </div>
              
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                background: 'linear-gradient(90deg, #c4b5fd, #fbcfe8)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                marginBottom: '16px'
              }}>
                Vitamin: Freaks of a Feather
              </h2>
              
              <div style={{
                height: '2px',
                width: '100px',
                background: 'linear-gradient(90deg, #9333ea, #ec4899)',
                margin: '0 auto 24px'
              }}></div>
            </div>
            
            <div style={{
              background: 'rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '32px'
            }}>
              <p style={{ color: '#e5e7eb', lineHeight: '1.8', margin: 0 }}>
                Pre-order the exclusive <span style={{ color: '#c084fc', fontWeight: '600' }}>Vitamin</span> album now.
                Every pre-sale includes delivery of the <span style={{ color: '#c084fc', fontWeight: '600' }}>first-ever John Butler studio recording</span> on <span style={{ fontWeight: '700', color: '#f472b6' }}>December 24th</span>.
              </p>
            </div>

            {/* Form Fields */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', marginBottom: '24px' }}>
                <span style={{ 
                  display: 'block', 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  color: '#d8b4fe', 
                  marginBottom: '8px' ,
                  alignSelf: 'center'
                }}>
                  Email Address
                </span>
                <input
                  type="email"
                  required
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    border: '2px solid rgba(147, 51, 234, 0.5)',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: '#ffffff',
                    padding: '14px',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </label>
              
              <label style={{ display: 'block', marginBottom: '24px' }}>
                <span style={{ 
                  display: 'block', 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  color: '#d8b4fe', 
                  marginBottom: '8px' 
                }}>
                  Solana Wallet Address
                </span>
                <input
                  type="text"
                  required
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    border: '2px solid rgba(147, 51, 234, 0.5)',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: '#ffffff',
                    padding: '14px',
                    fontSize: '14px',
                    fontFamily: 'monospace',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                  placeholder="Enter your Solana address"
                />
              </label>
              
              <button
                onClick={handlePreSubmit}
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
                style={{
                  width: '100%',
                  background: 'linear-gradient(90deg, #9333ea, #ec4899)',
                  color: '#ffffff',
                  fontWeight: '700',
                  padding: '18px 24px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '18px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: buttonHovered 
                    ? '0 15px 40px rgba(147, 51, 234, 0.7)' 
                    : '0 10px 30px rgba(147, 51, 234, 0.5)',
                  transform: buttonHovered ? 'translateY(-2px)' : 'translateY(0)'
                }}
              >
                Confirm & Continue to Payment
              </button>
            </div>

            {submitted && (
              <div style={{
                marginTop: '32px',
                padding: '24px',
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(147, 51, 234, 0.5)',
                borderRadius: '12px'
              }}>
                <PayPalButtons
                  style={{ layout: 'vertical' }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [{ amount: { value: '50.00' } }]
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then(details => {
                      alert(`Thank you, ${details.payer.name.given_name}!

Your purchase is confirmed.

Email: ${email}
Solana Wallet: ${wallet}`);
                    });
                  }}
                />
              </div>
            )}
          </section>

          {/* Footer */}
          <footer style={{
            fontSize: '14px',
            color: '#6b7280',
            textAlign: 'center',
            paddingTop: '48px',
            paddingBottom: '32px',
            marginTop: '64px'
          }}>
            <div style={{
              height: '1px',
              width: '300px',
              background: 'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.5), transparent)',
              margin: '0 auto 24px'
            }}></div>
            &copy; {new Date().getFullYear()} MAYBEART — Built by MC O & Monkey
          </footer>
        </div>
      </div>
    </PayPalScriptProvider>
  );
}