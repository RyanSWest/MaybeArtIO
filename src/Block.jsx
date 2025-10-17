import Token from "./imgs/Token.png";
import Back from "./imgs/back.png";
import Car from "./Carousel.jsx";
import Count from "./Count.jsx";
import { Button, Container, Badge } from "react-bootstrap";

const Block = () => {
  return (
    <Container className='hero-section' fluid>
      <div className="position-relative"> 

           <div className="position-absolute top-3 start-0"  
       
        
        >
          <img
            src={Token}
            alt="Logo"
            className="rounded-circle img-fluid"
            style={{  position:"fixed", width: "15rem", height: "15rem", objectFit: "cover" ,borderRadius:'50px', marginTop:'7rem',zIndex:'3'}}

           
          />
        </div>
        <img
          className="img-fluid w-100"
          src={Back}
          //  'https://wallpaperaccess.com/full/1519085.jpg'

          alt="Metaverse background"
          style={{ height: "50rem", objectFit: "cover", opacity: ".70" }}
        />

          <img
          className="img-fluid w-100"
          src={Back}
          //  'https://wallpaperaccess.com/full/1519085.jpg'

          alt="Metaverse background"
          style={{ height: "50rem", objectFit: "cover", opacity: ".70" }}
        />

        

        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <h1
             style={{
              fontFamily:
                // 'Ireon CyberPunk demo' ,
                "Rajdhani",
              fontSize: "xx-large",
              fontWeight: "bolder",
              // background:'black'
            }}
                        className="cyberpunk-span"

          >
            Countdown to Auction Day!
          </h1>
                       <h1 className ='cyberpunk-span-blue'>Countdown</h1>


          <h1
            className="cyberpunk-span"
            style={{
              fontFamily:
                'Ireon CyberPunk demo' ,
                // "Rajdhani",
              fontSize: "xx-large",
              fontWeight: "bolder",
              // background:'black'
            }}
          >
            NOV 30
          </h1>

          <div className="position-absolute top-50 start-50 translate-middle text-white text-center ">
            <Badge  bg='dark'style={{zIndex:'0'}} >




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

        
      </div>
    </Container>
  );
};
export default Block;
