import WalletButton  from './WalletButton';
import { useWalletTransactionSignAndSend } from './useTransactionSignandSend';  
import './Header.css';
// import {NavBar, NavItem, Nav} from 'react-bootstrap';
import {Link, Route} from 'react-router-dom';
 export default function  Header() {
  return (
    <div className ='nav'> 
     <a href='/'>  <span  style ={{padding: '1rem',color: 'white', fontSize: 'x-large', fontFamily:'Rajdhani',fontStyle:'bolder' , fontWeight:'700'}}> Home</span>  </a> 
     <Link to= '/about'> <span  style ={{color: 'white', fontSize: 'x-large',fontFamily:'Rajdhani' , fontStyle:'bolder',fontWeight:'700' }}> About</span>   </Link>
     <Link to ='/grid'><span style ={{color: 'white', fontSize: 'x-large' ,fontFamily:'Rajdhani' , fontStyle:'bolder',fontWeight:'700' }}>NFT  Gallery</span>  </Link>
     <Link to ='/whitepaper'> <span style ={{color: 'white', fontSize: 'x-large' ,fontFamily:'Rajdhani' , fontStyle:'bolder',fontWeight:'700' }}> Whitepaper</span>  </Link>
        
       <WalletButton  />
       
     

      
        

    
    
    </div>
  )
}