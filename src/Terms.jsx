import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

export default function Terms() {
  const navigate = useNavigate();

  const handleAgree = () => {
    localStorage.setItem('disclaimerAccepted', 'true'); // mark as accepted
    navigate('/register');
  };

  return (
    <Container style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }} fluid>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Terms of Service / Whitepaper</h1>

      <embed
        src="/PDFs/Dis.pdf"  // <-- put PDFs folder in public
        type="application/pdf"
        width="100%"
        height="800px"
      />

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button variant="primary" onClick={handleAgree}>
          I Agree, Continue to Register
        </Button>
      </div>
    </Container>
  );
}
