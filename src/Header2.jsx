import { useState } from "react";
import { Navbar, NavDropdown,Nav, Image, Container,Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./imgs/Logo.png";
import WalletButton from "./WalletButton";
import { useUser } from "./util/UserContextProvider";
import "./Header.css";
import "./head.css";

const navStyle = {
  color: "white",
  fontSize: "1rem",
  fontFamily: "Rajdhani",
  fontWeight: 700,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  backgroundColor:"black",
};

export default function Header2() {
  const user = useUser();
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      bg="dark"
      variant="light"
      expand="lg"
      sticky="top"
      expanded={expanded}
      style={{
        padding: "0.5rem 1rem",
        height: "5rem",
        borderBottom: "2px solid white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        fluid
        className="d-flex align-items-center justify-content-between"
      >
        {/* Brand Section */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2"
        >
          <Image
            src={Logo}
            style={{ height: "3rem", width: "3rem" }}
            roundedCircle
          />
          <span
            style={{
              fontSize: "x-large",
              fontWeight: "700",
              fontFamily: "Rajdhani",
              color: "white",
            }}
          >
            MaybeArt.IO
          </span>
        </Navbar.Brand>

        {/* Toggler for Mobile */}

         <NavDropdown title="Links" id="navbarScrollingDropdown"
         
         bg='dark'
         
         
         style={{ color: 'white', fontWeight: '700', fontFamily: 'Rajdhani' }}>
             <NavDropdown.Item style={navStyle}   href="/">Home</NavDropdown.Item>
             <NavDropdown.Item style={navStyle} href="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
             <NavDropdown.Item style={navStyle } href="/register" >
                Artist Signup
              </NavDropdown.Item>
             <NavDropdown.Item style={navStyle} href="/upload">
                Upload Art
              </NavDropdown.Item>
               <NavDropdown.Item style={navStyle} href="/grid">
               Gallery
              </NavDropdown.Item>
             <NavDropdown.Item style={navStyle} href="/presale">
                Presale
              </NavDropdown.Item>
             <NavDropdown.Item style={navStyle} href="/buyToken">
                Buy Tokens
              </NavDropdown.Item>
                 <NavDropdown.Item style={navStyle} href="/Auction">
              Auction
              </NavDropdown.Item>
                  <NavDropdown.Item style={navStyle} href="/us">
              Token Excchange
              </NavDropdown.Item>
            </NavDropdown>
        {/* <Navbar.Toggle
            // aria-controls={`offcanvasNavbar-expand-${expanded}`} 
          onClick={() => setExpanded(expanded ? false : expanded)}
          style={{
    borderColor: 'white',
    filter: 'invert(1)'
  }}
        /> */}

        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav"  
        
        
        
        >
          <Nav className="ms-auto gap-3 align-items-center">
            <Link to="/" style={navStyle} onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/register" style={navStyle} onClick={handleLinkClick}>
              Register
            </Link>
            <Link to="/login" style={navStyle} onClick={handleLinkClick}>
              Login
            </Link>
            <Link to="/buyToken" style={navStyle} onClick={handleLinkClick}>
             Buy Tokens
            </Link>
              <Link to="/presale" style={navStyle} onClick={handleLinkClick}>
              PreSale
            </Link>
            <Link to="/upload" style={navStyle} onClick={handleLinkClick}>
              Upload
            </Link>
            <Link to="/grid" style={navStyle} onClick={handleLinkClick}> 
            Gallery
            </Link>

            <WalletButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
