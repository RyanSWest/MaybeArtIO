import WalletButton  from './WalletButton';
import { useWalletTransactionSignAndSend } from './useTransactionSignandSend';  
import './Header.css';
import {Link, Route} from 'react-router-dom';
 export default function  Header() {
  return (
    <div className ='nav'> 
     <a href='/'>  <span className='cyberpunk-span'> Home</span>  </a> 
     <Link to= '/about'> <span className='cyberpunk-span'> About</span>   </Link>
     <Link to ='gallery'><span className='cyberpunk-span'>NFT  Gallery</span>  </Link>
     <Link to ='/whitepaper'> <span className='cyberpunk-span'> Whitepaper</span>  </Link>
        
       <WalletButton  />
       
     

      
        

    
    
    </div>
  )
}