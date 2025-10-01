import WalletButton  from './WalletButton';
import { useWalletTransactionSignAndSend } from './useTransactionSignandSend';  
import './Header.css';
// import {NavBar, NavItem, Nav} from 'react-bootstrap';
import {Link, Route} from 'react-router-dom';
 export default function  Header() {
  return (
    <div className ='nav'> 
     <a href='/'>  <span  style ={{padding: '1rem',color: 'white', fontSize: 'large', fontFamily:'Rajdhani',fontStyle:'bolder' , fontWeight:'700',padding:'.5rem'}}> Home</span>  </a> 
     <Link to= '/about'> <span  style ={{color: 'white', fontSize: 'large',fontFamily:'Rajdhani' , fontStyle:'bolder',fontWeight:'700',padding:'.5rem' }}> About</span>   </Link>
     <Link to ='/grid'><span style ={{color: 'white', fontSize: 'large' ,fontFamily:'Rajdhani' , fontStyle:'bolder',fontWeight:'700',padding:'.5rem' }}>NFT  Gallery</span>  </Link>
     <Link to ='/whitepaper'> <span style ={{color: 'white', fontSize: 'large' ,fontFamily:'Rajdhani' , fontStyle:'bolder',fontWeight:'700' ,padding:'.5rem'}}> Whitepaper</span>  </Link>
        
       <WalletButton  />
       
     

      
        

    
    
    </div>
  )
}