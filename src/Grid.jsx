import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Modal
} from 'react-bootstrap';
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
import Token from "./imgs/Token.png";
import Mono from "./imgs/mono.jpg";
import Taco from"./imgs/TACO.jpg";
import Orang from './imgs/Orang2.jpg';
import Baby from'./imgs/Baby.jpg';
import Raijin from'./imgs/Raijin.jpg';
import Rabbit from'./imgs/Rabbit.jpg';
import Wombat from'./imgs/Wombat.jpg';
import Bunny from'./imgs/Bunny.jpg';
import Scrawny from'./imgs/Scrawny.jpg';
import RUSS2 from './imgs/RUSSL/RUSS2.jpg';
import RUSS3 from './imgs/RUSSL/RUSS3.jpg';
import RUSS4 from './imgs/RUSSL/RUSS4.jpg';
import RUSS6 from './imgs/RUSSL/RUSS6.jpg';
import RUSS7 from './imgs/RUSSL/RUSS7.jpg';
import RUSS9 from './imgs/RUSSL/RUSS9.jpeg';


export const Grid = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  // List of images to map
  const images = [
    Baby, Taco, Bunny, Orang, Drag, Rodan, Rath, Bear, Gorilla, Raijin,
    Drag3, Chimp, AngryGorr, Drag2, Kaiju, Rhino, Scrawny, Wombat 
  ];
  const images2= [RUSS2,RUSS3,RUSS4, RUSS6,RUSS7,RUSS9]

  return (
    <Container fluid style={{ paddingTop: '6rem', paddingBottom: '3rem', backgroundColor: 'black' }}>
      <h1 style={{ fontFamily: 'Rajdhani', color: 'darkslategrey', fontWeight: '700', paddingTop: '2rem', textAlign:'center' }}>NFT GALLERY</h1>
      <h3 style={{ fontFamily: 'Rajdhani', color: 'darkslategrey', fontWeight: '700', textAlign:'center' }}>Ryan West</h3>

      <Row className="g-3 mt-4">
        {images.map((img, idx) => (
          <Col key={idx} xs={6} sm={4} md={3} lg={2}>
             <div className="image-wrapper" style={{ overflow: 'hidden', borderRadius: '8px' }}>
              <img
                src={img}
                alt={`Art ${idx + 1}`}
                onClick={() => handleImageClick({ fullSize: img, title: `Art ${idx + 1}` })}
                style={{ width: '100%', height: '200px', objectFit: 'cover', cursor: 'pointer' }}
              />
                <p
    style={{
      marginTop: '0.5rem',
      color: 'lightgrey',
      fontFamily: 'Rajdhani',
      fontWeight: '600',
      fontSize: '1.1rem'
    }}
  >
    $100
  </p>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="g-3 mt-4">
 <h1 style={{ fontFamily: 'Rajdhani', color: 'darkslategrey', fontWeight: '700', paddingTop: '2rem', textAlign:'center' }}>NFT GALLERY</h1>
      <h3 style={{ fontFamily: 'Rajdhani', color: 'darkslategrey', fontWeight: '700', textAlign:'center' }}>Russ Aigner</h3>

        {images2.map((img, idx) => (
          <Col key={idx} xs={6} sm={4} md={3} lg={2}>
            <div className="image-wrapper" style={{ overflow: 'hidden', borderRadius: '8px' }}>
              <img
                src={img}
                alt={`Art ${idx + 1}`}
                onClick={() => handleImageClick({ fullSize: img, title: `Art ${idx + 1}` })}
                style={{ width: '100%', height: '200px', objectFit: 'cover', cursor: 'pointer' }}
              />
                <p
    style={{
      marginTop: '0.5rem',
      color: 'white',
      fontFamily: 'Rajdhani',
      fontWeight: '600',
      fontSize: '1.1rem'
    }}
  >
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
            <Modal.Title>  Price: $100</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedImage.fullSize}
              alt={selectedImage.title}
              style={{ width: '100%' }}
            />
              <p
    style={{
      marginTop: '0.5rem',
      color: 'lightgrey',
      fontFamily: 'Rajdhani',
      fontWeight: '600',
      fontSize: '1.1rem'
    }}
  >
    $100
  </p>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default Grid;
