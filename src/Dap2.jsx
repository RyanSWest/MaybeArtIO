import {Container, Image,Card} from'react-bootstrap'

import React from 'react'

function Dap2() {
  return (
    <Container bg='dark'  >
       <div className="position-relative text-center">
  {/* Background Image */}
  <img
    src="https://tse1.mm.bing.net/th/id/OIP.Q7pwtVs-wZhtHTgFOygF8gHaEK?pid=Api&P=0&h=220"
    className="img-fluid w-100"
    alt="Background"
    style={{
      filter: "brightness(45%) saturate(110%)",
      objectFit: "cover",
      height: "400px",
    }}
  />

  {/* Gradient Overlay */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background:
        "linear-gradient(135deg, rgba(20, 10, 40, 0.7) 0%, rgba(10, 5, 20, 0.85) 40%, rgba(5, 5, 25, 0.95) 100%)",
      boxShadow: "inset 0 0 60px rgba(88, 28, 135, 0.4)",
    }}
  ></div>

  {/* Text Overlay */}
  <div
    className="position-absolute top-50 start-50 translate-middle text-light px-4 py-3 rounded"
    style={{
      maxWidth: "800px",
      background:
        "linear-gradient(135deg, rgba(111, 45, 168, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%)",
      backdropFilter: "blur(6px)",
      border: "1px solid rgba(147, 51, 234, 0.25)",
      boxShadow: "0 0 20px rgba(88, 28, 135, 0.3)",
    }}
  >
    <h2 className="fw-bold mb-3" style={{ color: "#c084fc" }}>
      MAYBEART
    </h2>
    <p className="fs-5 lh-lg mb-0 text-light">
      A next-generation blockchain platform empowering artists, musicians, and collectors.
      Our upcoming launch will redefine creativity on-chain.
    </p>
  </div>
</div>

       <Card> 
        <Card.Title>  PRE ORDERY NOW!!</Card.Title>
        < Image src='https://tse3.mm.bing.net/th/id/OIP.2t27fF_lrU7G39IWuchPOAHaDd?pid=Api&P=0&h=220' className='img-fluid'
        style ={{objectFit:'cover'}}
        
        />
        <Card.Text> John Butler's First Recorded Album!!</Card.Text>
       </Card>
        





    </Container>
  )
}

export default Dap2