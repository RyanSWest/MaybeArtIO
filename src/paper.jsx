import React from 'react';
import  White from './PDFs/Whitepaper.pdf'
import {Container }from 'react-bootstrap'
export default function PDFViewer() {
  return (
    <Container style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    }}     fluid>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Whitepaper</h1>
      
      <embed
        src=  './PDFs/Whitepaper.pdf'
        
        // {White}
        type="application/pdf"
        width="100%"
        height="800px"
      />
    </Container>
  );
}