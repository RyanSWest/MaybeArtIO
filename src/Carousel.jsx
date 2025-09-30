import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Mono from './imgs/mono.jpg';
import Butlerpic from './imgs/Butlerpic.jpg';
import'./index.css';
import Token from './imgs/token.png'

const Car = () => {
  return (
    <Carousel className= 'dark'>
      <Carousel.Item>
<img src={Mono} className="d-block w-100" style={{height: '24rem', objectFit: 'contain'}} alt="..." />
        <Carousel.Caption> <h1  className='cyberpunk-span'> Mono/Poly</h1> 
        <p className='cyber-text'>New Album by Monopoly</p>
        </Carousel.Caption>
      
      </Carousel.Item>
           <Carousel.Item>
<img src=

"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.y01j4tDJpXL3-iT8v8J_1wHaKY%3Fpid%3DApi&f=1&ipt=1b9aa13bec835b47e45cfa12b7115452e9694494753d06e12c9804c9ac3ea686&ipo=images" className="d-block w-100" style={{height: '24rem', objectFit: 'contain'}} alt="..." />
      <Carousel.Caption> <h1  className='cyberpunk-span'> Mono/Poly</h1> 
        <p className='cyber-text'>New Album by Monopoly</p>
        </Carousel.Caption>
      
      </Carousel.Item>
      <Carousel.Item>
        <img src={Butlerpic} className="d-block w-100" style={{height: '24rem', objectFit: 'contain'}} alt="..." />

        <Carousel.Caption><h1 className='cyberpunk-span'>John Butler's unreleased Material!</h1>  
        <p className='cyber-text'> John Butler's very first recorded album with Vitamin!!</p>
        </Carousel.Caption>
       </Carousel.Item>
      <Carousel.Item>
        <img src={Token} className="d-block w-100" style={{height: '24rem', objectFit: 'contain'}} alt="..." />
      </Carousel.Item>
       <Carousel.Item>
        {/* <img src={Token}
         className="d-block w-100" style={{height: '24rem', objectFit: 'contain'}} alt="..." /> */}
         <img src ='./images/Gorilla1.jpg' alt ='fagg'/>
      </Carousel.Item>
    </Carousel>
  )
}

export default Car