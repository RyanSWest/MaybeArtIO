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
import Icecream from'./imgs/Icecream.jpg';
import Scrawny from'./imgs/Scrawny.jpg';

 
 export const Grid =()=>{
const stuff=[ {pic: {Baby},pos:'47% 35%'},{pic :{Kaiju}, pos:'75% 65%'},{pic :{Kaiju}, pos:'53% 43%'},{pic :{Kaiju}, pos:'65% 65%'} ,{pic :{Kaiju}, pos:'50% 25%'},{pic :{Kaiju}, pos:'47%'},{pic :{Kaiju}, pos:'65% 35%'},]




return ( 

    <div className ='grid-container'> 
    <div className='grid-item-1'> 
        <img src= {Baby} alt='img1'/>
    </div>
    <div className='grid-item-2'> 
        <img src= {Wombat} alt='img1'/>
    </div> 
    <div className='grid-item-3'> 
        <img src= {Rodan} alt='img1'/>
    </div> 
    <div className='grid-item-4'> 
        <img src= {Drag2} alt='img1'/>
        <div className='grid-item-5'> 
        <img src= {Drag3} alt='img1'/>
    </div> 

    <div className='grid-item-6'> 
        <img src= {Drag3} alt='img1'/>
    </div>
    <div className='grid-item-7'> 
        <img src= {Baby} alt='img1'/>
    </div> 
    <div className='grid-item-8'> 
        <img src= {Baby} alt='img1'/>
    </div>
    <div className='grid-item-9'> 
        <img src= {Baby} alt='img1'/>
    </div> 



    <div className='grid-item-10'> 
        <img src= {Baby} alt='img1'/>
    </div>
    </div>
     
        

    </div>
)

}

// export default Grid