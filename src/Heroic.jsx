import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Ice from " ./imgs/Ice.jpg";
import Rabbit from "./imgs/Rabbit.png";
import Faint from "'.imgs/Faint.png";

export default function HeroSection() {
  return (
    <Container fluid className="text-center py-5" style={{ background: "black" }}>
      
      {/* HERO BUTTONS */}
      <Row className="justify-content-center mb-4">
        <Col xs="auto">
          <Link to="/gallery" className="whitepaper mx-2">
            READ WHITEPAPER
          </Link>
        </Col>
        <Col xs="auto">
          <Link to="/about" className="artist mx-2">
            ABOUT
          </Link>
        </Col>
        <Col xs="auto">
          <Link to="/buyToken" className="buy mx-2">
            BUY $MAYBEART TOKEN
          </Link>
        </Col>
      </Row>

      {/* IMAGE CAROUSEL SECTION */}
      <Row className="justify-content-center align-items-center mb-4 text-center">
        <Col xs={12} md={4} className="mb-3 mb-md-0">
          {/* <img src={Ice} alt="Featured Art 1" className="img-fluid rounded" /> */}
        </Col>
        <Col xs={12} md={4} className="mb-3 mb-md-0">
          <img src={Rabbit} alt="Featured Art 2" className="img-fluid rounded" />
        </Col>
        <Col xs={12} md={4}>
          <img src={Faint} alt="Featured Art 3" className="img-fluid rounded" />
        </Col>
      </Row>

      {/* SLOGAN IMAGE + TEXT */}
      <Row className="justify-content-center text-center">
        <Col xs={12} md={8}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <Image
              src="https://tse3.mm.bing.net/th/id/OIP.2t27fF_lrU7G39IWuchPOAHaDd?pid=Api&P=0&h=220"
              className="img-fluid rounded"
              alt="Hero Banner"
            />
            <h2 className="cyberpunk-text mt-3">Turning Creativity into Currency</h2>
          </div>
        </Col>
      </Row>

    </Container>
  );
}
