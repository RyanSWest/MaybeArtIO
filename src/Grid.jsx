import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';

// Images imported from src/imgs
import Drag from "./imgs/COLORED DRAGON13.jpg";
import Rodan from "./imgs/Rodan3.jpg";
import Rhino from "./imgs/RHINOGUN9.jpg";
import Gorilla from "./imgs/Gorilla1.jpg";
import AngryGorr from "./imgs/Gorilla-MAD11.jpg";
import Chimp from "./imgs/Chimp2.jpg";
import Rath from "./imgs/RathScreenshot.png";
import Drag3 from "./imgs/DragonSP1.jpg";
import Bear from "./imgs/Bear6.jpg";
import Kaiju from "./imgs/kaiju2.jpg";
import Drag2 from "./imgs/Dragon2.jpg";
import Taco from "./imgs/TACO.jpg";
import Orang from './imgs/Orang2.jpg';
import Baby from './imgs/Baby.jpg';
import Raijin from './imgs/Raijin.jpg';
import Bunny from './imgs/Bunny.jpg';
import Scrawny from './imgs/Scrawny.jpg';
import RUSS2 from './imgs/RUSSL/RUSS2.jpg';
import RUSS3 from './imgs/RUSSL/RUSS3.jpg';

const Grid = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const gallery1 = [
    Baby, Taco, Bunny, Orang, Drag, Rodan, Rath, Bear, Gorilla, Raijin,
    Drag3, Chimp, AngryGorr, Drag2, Kaiju, Rhino, Scrawny
  ];

  const gallery2 = [RUSS2, RUSS3];

  const renderGallery = (images, owner) => (
    <>
      <h2 style={{ fontFamily: 'Rajdhani', color: 'darkslategrey', fontWeight: '700', textAlign: 'center', marginTop: '2rem' }}>{owner}</h2>
      <Row className="g-3 mt-2">
        {images.map((img, idx) => (
          <Col key={idx} xs={6} sm={4} md={3} lg={2}>
            <div style={{ overflow: 'hidden', borderRadius: '8px', textAlign: 'center' }}>
              <img
                src={img}
                alt={`Art ${idx + 1}`}
                onClick={() => handleImageClick({ fullSize: img, title: `Art ${idx + 1}` })}
                style={{ width: '100%', height: '200px', objectFit: 'cover', cursor: 'pointer' }}
              />
              <p style={{ marginTop: '0.5rem', color: 'lightgrey', fontFamily: 'Rajdhani', fontWeight: '600', fontSize: '1.1rem' }}>$100</p>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );

  return (
    <Container fluid style={{ paddingTop: '6rem', paddingBottom: '3rem', backgroundColor: 'black' }}>
      <h1 style={{ fontFamily: 'Rajdhani', color: 'darkslategrey', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>NFT GALLERY</h1>

      {renderGallery(gallery1, "Ryan West")}
      {renderGallery(gallery2, "Russ Aigner")}

      {/* Modal */}
      {selectedImage && (
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedImage.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ textAlign: 'center' }}>
            <img src={selectedImage.fullSize} alt={selectedImage.title} style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain' }} />
            <p style={{ marginTop: '0.5rem', color: 'lightgrey', fontFamily: 'Rajdhani', fontWeight: '600', fontSize: '1.1rem' }}>$100</p>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default Grid;
