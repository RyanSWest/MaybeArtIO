import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';

const imageList1 = [
  'Baby.jpg', 'TACO.jpg', 'Bunny.jpg', 'Orang2.jpg', 'COLORED DRAGON13.jpg',
  'Rodan3.jpg', 'RathScreenshot.png', 'Bear6.jpg', 'Gorilla1.jpg', 'Raijin.jpg',
  'DragonSP1.jpg', 'Chimp2.jpg', 'Gorilla-MAD11.jpg', 'Dragon2.jpg', 'kaiju2.jpg',
  'RHINOGUN9.jpg', 'Scrawny.jpg', 'Wombat.jpg'
];

const imageList2 = [
  'RUSSL/RUSS2.jpg', 'RUSSL/RUSS3.jpg'
];

const Grid = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (filename) => {
    setSelectedImage(filename);
    setShowModal(true);
  };

  return (
    <Container fluid style={{ paddingTop: '6rem', paddingBottom: '3rem', backgroundColor: 'black' }}>
      <h1 style={{ fontFamily: 'Rajdhani', color: 'darkslategrey', fontWeight: '700', paddingTop: '2rem', textAlign:'center' }}>
        NFT GALLERY
      </h1>
      <h3 style={{ fontFamily: 'Rajdhani', color: 'darkslategrey', fontWeight: '700', textAlign:'center' }}>
        Ryan West
      </h3>

      <Row className="g-3 mt-4">
        {imageList1.map((filename, idx) => (
          <Col key={idx} xs={6} sm={4} md={3} lg={2}>
            <div style={{ overflow: 'hidden', borderRadius: '8px' }}>
              <img
                src={`/imgs/${filename}`}
                alt={`Art ${idx + 1}`}
                onClick={() => handleImageClick(filename)}
                style={{ width: '100%', height: '200px', objectFit: 'cover', cursor: 'pointer' }}
              />
              <p style={{ marginTop: '0.5rem', color: 'lightgrey', fontFamily: 'Rajdhani', fontWeight: '600', fontSize: '1.1rem' }}>
                $100
              </p>
            </div>
          </Col>
        ))}
      </Row>

      <Row className="g-3 mt-4">
        <h1 style={{ fontFamily: 'Rajdhani', color: 'darkslategrey', fontWeight: '700', paddingTop: '2rem', textAlign:'center' }}>
          NFT GALLERY
        </h1>
        <h3 style={{ fontFamily: 'Rajdhani', color: 'darkslategrey', fontWeight: '700', textAlign:'center' }}>
          Russ Aigner
        </h3>

        {imageList2.map((filename, idx) => (
          <Col key={idx} xs={6} sm={4} md={3} lg={2}>
            <div style={{ overflow: 'hidden', borderRadius: '8px' }}>
              <img
                src={`/imgs/${filename}`}
                alt={`Art ${idx + 1}`}
                onClick={() => handleImageClick(filename)}
                style={{ width: '100%', height: '200px', objectFit: 'cover', cursor: 'pointer' }}
              />
              <p style={{ marginTop: '0.5rem', color: 'white', fontFamily: 'Rajdhani', fontWeight: '600', fontSize: '1.1rem' }}>
                $100
              </p>
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      {selectedImage && (
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Price: $100</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={`/imgs/${selectedImage}`}
              alt={selectedImage}
              style={{ width: '100%' }}
            />
            <p style={{ marginTop: '0.5rem', color: 'lightgrey', fontFamily: 'Rajdhani', fontWeight: '600', fontSize: '1.1rem' }}>
              $100
            </p>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default Grid;
