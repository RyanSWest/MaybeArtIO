import React from 'react';
import './Ozzie.css';
const VitaminPreSale = () => {
  return (
    <section 
      className="features9 platformm5" 
      style={{
        background: 'linear-gradient(135deg, #393400 0%, #232000 100%)',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-8">
            <div className="bg-frame-container" style={{ position: 'relative' }}>
              {/* Background frame */}
              <div 
                className="bg-frame" 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  border: '49px solid rgba(178, 156, 135, 0.7)',
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />
              
              <div 
                className="img-bg-container" 
                style={{
                  backgroundColor: '#AAFC75',
                  padding: '60px 40px',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                <div className="text-wrap" style={{ marginBottom: '40px' }}>
                  <h1 
                    className="mbr-section-title" 
                    style={{
                      fontSize: '3rem',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      color: '#232000'
                    }}
                  >
                    Vitamin Pre-Sale
                  </h1>
                  
                  <h2 
                    className="mbr-section-subtitle" 
                    style={{
                      fontSize: '1.5rem',
                      marginBottom: '30px',
                      color: '#232000'
                    }}
                  >
                    Pre-Order the Vitamin Album, <i>Freaks of a Feather,</i> and 
                    receive John Butler's first ever studio recording before anybody else.
                  </h2>
                  
                  <div className="mbr-section-btn">
                    <a 
                      className="btn btn-primary" 
                      href="https://mobiri.se"
                      style={{
                        padding: '12px 30px',
                        fontSize: '1rem',
                        backgroundColor: '#393400',
                        border: 'none',
                        color: 'white',
                        textDecoration: 'none',
                        display: 'inline-block',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      Join Pre-sale
                    </a>
                  </div>
                </div>
                
                <div className="img-wrap" style={{ position: 'relative' }}>
                  <div 
                    className="item-img-frame-before" 
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '-10px',
                      right: '10px',
                      bottom: '10px',
                      border: '2px solid rgba(0,0,0,0.1)',
                      zIndex: 0
                    }}
                  />
                  
                  <div className="item-img" style={{ position: 'relative', zIndex: 1 }}>
                    <img 
                      src="/assets/images/maybe-banner-706x275.jpeg" 
                      alt="Vitamin Album Banner"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                      }}
                    />
                  </div>
                  
                  <div 
                    className="item-img-frame-after"
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      right: '-10px',
                      bottom: '-10px',
                      border: '2px solid rgba(0,0,0,0.1)',
                      zIndex: 0
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitaminPreSale;