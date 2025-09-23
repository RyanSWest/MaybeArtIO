
// Import all of Bootstrap’s CSS
import * as bootstrap from 'bootstrap'
import Token from './imgs/Token.png';
import{Button }from 'bootstrap';
import './index.css';
import Navbar from './Navbar.jsx';
import { Nav } from 'react-bootstrap';
const Home =()=>{



 return(




    <div className='container-fluid'> 
 <h1 className ='cyberpunk-span'>HEY BITCHES</h1>
 <Navbar/>
         <button type="button" class="btn btn-primary">
  Notifications <span class="badge text-bg-secondary">4</span>
</button>
{/* <img src={Token} class= 'img-fluid'/>  */}

    </div>
 )

}
export default Home