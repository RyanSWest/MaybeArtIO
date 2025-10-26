import { useState } from "react";
import {
  Navbar,
  Nav,
  Image,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./imgs/Logo.png";
import "./Header.css";
import WalletButton from "./WalletButton";
import './head.css';
import { useUser } from './util/UserContextProvider';

const navStyle = {
  color: "white",
  fontSize: "medium",
  fontFamily: "Rajdhani",
  fontWeight: "700",
  padding: "0.5rem",
};

export default function Header2() {
  const user = useUser();
  const [expanded, setExpanded] = useState(false); // control navbar collapse

  const handleLinkClick = () => {
    setExpanded(false); // close navbar when a link is clicked
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="w-100"
       
      expanded={expanded} // control collapse state
      style={{
        padding: "0.5rem 1rem",
        paddingBottom: '10rem',
        height:'4rem'
      }}
    >
      <Container fluid>
        <Navbar.Brand to="/" className="d-flex align-items-center gap-2">
          <Image
            src={Logo}
            style={{ height: "3rem", width: "3rem" }}
            roundedCircle
          />
          <span className="d-none d-sm-inline" style={{ fontWeight: "700" }}>
            MaybeArt.IO
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Link to='/' style={navStyle} onClick={handleLinkClick}>Home</Link>
            <Link to="/register" style={navStyle} onClick={handleLinkClick}>Register</Link>
            <Link to="/buyToken" style={navStyle} onClick={handleLinkClick}>Buy Token</Link>
            <Link to='/us' style={navStyle} onClick={handleLinkClick}>Exchange</Link>
            <Link to="/login" style={navStyle} onClick={handleLinkClick}>Login</Link>
            <Link to="/upload" style={navStyle} onClick={handleLinkClick}>Upload</Link>
            <WalletButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
