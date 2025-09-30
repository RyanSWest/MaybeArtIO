
import Token from './imgs/Token.png'


const Block =()=> { 


return (


<div className="position-relative">
  <img 
    className="img-fluid w-100"

   src= 'https://wallpaperaccess.com/full/1519085.jpg'
     alt="Metaverse background"
    style={{height: '25rem', objectFit: 'cover'}}
  />
  
  <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
    <h1 className="fw-bold">Your Text Here</h1>
    <p>Your description</p>
  </div>
  
  {/* Top left image with background */}
  <div className="position-absolute top-0 start-0 m-3">
    <img 
      src= {Token}
      alt="Logo"
      className="rounded-circle"
      style={{width: '60px', height: '60px', objectFit: 'cover'}}
    />
  </div>
</div>) 



}
export default Block;