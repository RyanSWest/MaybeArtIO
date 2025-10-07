import Token from "./imgs/Token.png";
import Back from "./imgs/back.png";
import Car from "./Carousel.jsx";
import Count from "./Count.jsx";
import { Button, Container, Badge } from "react-bootstrap";

const Block = () => {
  return (
    <Container fluid>
      <div className="position-relative">
        <img
          className="img-fluid w-100"
          src={Back}
          //  'https://wallpaperaccess.com/full/1519085.jpg'

          alt="Metaverse background"
          style={{ height: "50rem", objectFit: "cover", opacity: ".50" }}
        />

        

        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <h1
            className="cyber-text"
            style={{
              fontFamily:
                // 'Ireon CyberPunk demo' ,
                "Rajdhani",
              fontSize: "xx-large",
              fontWeight: "bolder",
              // background:'black'
            }}
          >
            Countdown to Auction Day!
          </h1>

          <h1
            className="cyber-text"
            style={{
              fontFamily:
                // 'Ireon CyberPunk demo' ,
                "Rajdhani",
              fontSize: "xx-large",
              fontWeight: "bolder",
              // background:'black'
            }}
          >
            NOV 30
          </h1>

          <div className="position-absolute top-50 start-50 translate-middle text-white text-center ">
            <Badge  bg='dark'>




               <h1
                className="cyber-text"
                style={{
                  fontFamily:
                    // 'Ireon CyberPunk demo' ,
                    "Rajdhani",
                  fontSize: "xx-large",
                  fontWeight: "bolder",
                  padding:'1rem'
                  // background:'black'
                }}
              >
               Countdown to Auction
              </h1>
              <h1
                className="cyber-text"
                style={{
                  fontFamily:
                    // 'Ireon CyberPunk demo' ,
                    "Rajdhani",
                  fontSize: "xx-large",
                  fontWeight: "bolder",
                  // background:'black'
                }}
              >
                NOV 30
              </h1>

              <Count />
            </Badge>
          </div>
        </div>

        <div className="position-absolute top-100 start-50 translate-middle text-white text-center">
          <Car />
        </div>

        {/* Top left image with background */}
        <div className="position-absolute top-3 start-0 m-3 z-index-1">
          <img
            src={Token}
            alt="Logo"
            className="rounded-circle"
            style={{ width: "15rem", height: "15rem", objectFit: "cover" ,borderRadius:'50px'}}
          />
        </div>
      </div>
    </Container>
  );
};
export default Block;
