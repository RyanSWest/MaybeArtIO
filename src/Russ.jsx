// import {require} from 'react'
// const images = require.context('./Russ', true);
// const imageList = images.keys().map(image => images(image))
import { Container, Image, Row, Col } from "react-bootstrap";
import "./index.css";

import Russ2 from "./imgs/RUSSL/RUSS2.jpg";
import Russ3 from "./imgs/RUSSL/RUSS3.jpg";
import Russ4 from "./imgs/RUSSL/RUSS4.jpg";
import Russ5 from "./imgs/RUSSL/RUSS5.jpg";
import Russ6 from "./imgs/RUSSL/RUSS6.jpg";
import "./new.css";

const Russ = () => {
  return (
    <Container>
      <Row>
        
        <Col>
          <div className="crap">
            <Image src={Russ2} />
          </div>

          <div className="crap">
            <Image src={Russ3} />
          </div>
          <div className="crap">
            <Image src={Russ4} />
          </div>

           
        </Col>

        <Col>  
        
           <div className="crap">
            <Image src={Russ5} />
          </div>

          <div className="crap">
            <Image src={Russ6} />
          </div>
        
        
        
        </Col>
       
      </Row>
    </Container>
  );
};
export default Russ;
