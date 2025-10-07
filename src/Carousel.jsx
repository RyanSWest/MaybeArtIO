import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Mono from './imgs/mono.jpg';
import Butlerpic from './imgs/Butlerpic.jpg';
import'./index.css';
import Logo from './imgs/Token.png';
import Diego from './imgs/Diego.jpg';
import Gorr from './imgs/Gorilla1.jpg';
 
const Car = () => {
  return (
    <Carousel  
    
    
    className= 'secondary' 
    >
      <Carousel.Item>
<img src={Mono} className="d-block w-100" style={{height: '24rem', objectFit: 'contain',borderRadius:'80px'}} alt="..." />
        <Carousel.Caption> <h1  className='cyberpunk-span'> Mono/Poly</h1> 
        <p className='cyber-text'>New Album by Monopoly</p>
        </Carousel.Caption>
      
      </Carousel.Item>
           <Carousel.Item>
<img src=

"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.y01j4tDJpXL3-iT8v8J_1wHaKY%3Fpid%3DApi&f=1&ipt=1b9aa13bec835b47e45cfa12b7115452e9694494753d06e12c9804c9ac3ea686&ipo=images" className="d-block w-100" style={{height: '24rem', objectFit: 'contain'}} alt="..." />
      <Carousel.Caption> <h1  className='cyber-text'>John Butler </h1> 
        <p className='cyber-text'>Unreleased Tracks by John Butler</p>
        </Carousel.Caption>
      
      </Carousel.Item>
      <Carousel.Item>
        <img src={Butlerpic} className="d-block w-100" style={{height: '24rem', objectFit: 'contain',borderRadius:'70px'}} alt="..." />

        <Carousel.Caption><h1 className='cyberpunk-span'>John Butler's unreleased Material!</h1>  
        {/* <p  style ={{color:'magenta'}}> John Butler's very first recorded album with Vitamin!!</p> */}
        </Carousel.Caption>
       </Carousel.Item>
      <Carousel.Item>
        <img src={Logo} className="d-block w-100" style={{height: '20rem', objectFit: 'contain',borderRadius:'90px'}} alt="..." />
      </Carousel.Item>


       <Carousel.Item>
        {/* <img src={Token}
         className="d-block w-100" style={{height: '24rem', objectFit: 'contain'}} alt="..." /> */}
         <img src ='./images/Diego2.jpg' alt ='Diego'  
                  className="d-block w-100" style={{height: '22rem', objectFit: 'contain',borderRadius:'70px'}} /> 

         
         
       
                 <p className='cyber-text'>Original Paintings Diego RIvera</p>

      </Carousel.Item>
       <Carousel.Item>
        <img src={Gorr}
         className="d-block w-100" style={{height: '22rem', objectFit: 'contain',borderRadius:'70px'}} alt="..." />
                  <p className='cyber-text'>Many New NFTs!!</p>

      </Carousel.Item>
    </Carousel>
  )
}

export default Car
