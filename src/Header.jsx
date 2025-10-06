import WalletButton  from './WalletButton';
import { useWalletTransactionSignAndSend } from './useTransactionSignandSend';  
import './Header.css';
import {Navbar, NavItem, Nav,Image,NavDropdown} from 'react-bootstrap';
import {Link, Route} from 'react-router-dom';
import Logo from './imgs/Logo.png';
 export default function  Header() {
  return (
    // <div className= ''  > 
 
    <Navbar expand='lg' bg="dark" variant="dark" sticky="top"  style= {{height:'7rem',padding:'1rem',position:'absolute',width:'100%'}} >

      <Navbar.Brand> MaybeArt.IO     
                    <Image src= {Logo}style= {{height:'6rem',padding:'1rem'}} roundedCircle/> 

       </Navbar.Brand>
               {/* <Image src= {Logo}style= {{heigth:'7rem'}} roundedCircle/> */}
               {/* <Navbar.Nav.Item to='/upload'> Upload</Navbar.Nav.Item> */}

     <a href='/'>   <span  style ={{padding: '1rem',color: 'white', fontSize: 'medium', fontFamily:'Rajdhani',fontStyle:'bolder' , fontWeight:'700',padding:'1rem'}}> Home</span>  </a> 
             <Nav.Item> Upload</Nav.Item>
          <Nav.Item href='/register'> <span  style ={{color: 'white', fontSize: 'medium',fontFamily:'Rajdhani' , fontStyle:'bolder',fontWeight:'700',padding:'1rem' }}> Register</span>   </Nav.Item>

     {/* <Nav.Item href='/about'> <span  style ={{color: 'white', fontSize: 'medium',fontFamily:'Rajdhani' , fontStyle:'bolder',fontWeight:'700',padding:'1rem' }}> About</span>   </Nav.Item>
     <Nav.Item to ='/grid'><span style ={{color: 'white', fontSize: 'medium' ,fontFamily:'Rajdhani' , fontStyle:'bolder',fontWeight:'700',padding:'1rem' }}>NFT  Gallery</span>  </Nav.Item>
     <Nav.Item to ='/whitepaper'> <span style ={{color: 'white', fontSize: 'medium' ,fontFamily:'Rajdhani' , fontStyle:'bolder',fontWeight:'700' ,padding:'1rem'}}> Whitepaper</span>  </Nav.Item>
        */}
       <Navbar.Collapse> 
        <NavDropdown> 

          <NavDropdown.Item href='/about'> </NavDropdown.Item> 
        About
        </NavDropdown>
         </Navbar.Collapse>
       {/* <WalletButton  /> */}
       
     </Navbar>

      
        

    
    
    // </div>
  )
}