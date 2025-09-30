import './grid.css';

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
import Header from './Header'
 
import'./index.css'
 
 export const Grid =()=>{
const stuff=[ {pic: {Baby},pos:'47% 35%'},{pic :{Kaiju}, pos:'75% 65%'},{pic :{Kaiju}, pos:'53% 43%'},{pic :{Kaiju}, pos:'65% 65%'} ,{pic :{Kaiju}, pos:'50% 25%'},{pic :{Kaiju}, pos:'47%'},{pic :{Kaiju}, pos:'65% 35%'},]




return ( 
   

    <div style= {{backgroundColor:'darkblue'}}>  
 
        <h1  style={{fontFamily:'Rajdhani', color:'darkslategrey',fontWeight:'700',fontStyle:'bolder'}} > NFT GALLERY</h1>


 
     <div className="grid">
               <div className="image-wrapper">
                 <img src={Baby} alt="Art 1" />
               </div>
               <div className="image-wrapper">
                 <img src={Taco} alt="Art 2" />
               </div>
               <div className="image-wrapper">
                 <img src={Orang} alt="Art 3" />
               </div>
               <div className="image-wrapper">
                 <img src={Bunny} alt="Art 3" />
               </div>
               <div className="image-wrapper">
                 <img src={Gorilla} alt="Art 3" />
               </div> 
               <div className="image-wrapper">
                 <img src={Raijin} alt="Art 3" />
               </div>
               <div className="image-wrapper">
                 <img src={Scrawny} alt="Art 3" />
               </div>
               <div className="image-wrapper">
                 <img src={Rath} alt="Art 3" />
               </div>
               <div className="image-wrapper">
                 <img src={Bear} alt="Art 3" />
               </div>
               <div className="image-wrapper">
                 <img src={Kaiju} alt="Art 3" />
               </div>
               <div className="image-wrapper">
                 <img src={Drag2} alt="Art 3" />
               </div>
               <div className="image-wrapper">
                 <img src={Drag} alt="Art 3" />
               </div>
               <div className="image-wrapper">
                 <img src={Drag2} alt="Art 3" />
               </div>
               <div className="image-wrapper">
                 <img src={Drag3} alt="Art 3" />
               </div> 
               <div className="image-wrapper">
                 <img src={Rhino} alt="Art3"/>
               </div>
               <div className="image-wrapper">
                 <img src={Rabbit} alt="Art3"/>
               </div>
               <div className='image-wrapper'> 
                 <img src={AngryGorr} alt='img1'/>
               </div> 
               <div className='image-wrapper'> 
                 <img src={Wombat} alt='img1'/>
               </div>
             </div>
     
        </div>
 
)

}

export default Grid