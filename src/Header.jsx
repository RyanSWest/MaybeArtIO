import WalletButton  from './WalletButton';
import { useWalletTransactionSignAndSend } from './useTransactionSignandSend';  
import './Header.css';
import {Link, Route} from 'react-router-dom';
 export default function  Header() {
  return (
    <div className ='nav'> 
     <a href='/'>  <span className='cyberpunk-span'> Home</span>  </a> 
     <Link to= '/about'> <span className='cyberpunk-span'> About</span>   </Link>
     <Link to ='grid'><span className='cyberpunk-span'> Gallery</span>  </Link>
     <Link to ='/grid'> <span className='cyberpunk-span'> Docs</span>  </Link>
        
       <WalletButton  />
       
     

      
        

    
    
    </div>
  )
}