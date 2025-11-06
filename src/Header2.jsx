import { useState } from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./imgs/Logo.png";
import WalletButton from "./WalletButton";
import { useUser } from "./util/UserContextProvider";
import "./Header.css";
import "./head.css";

const navStyle = {
  color: "white",
  fontSize: "1.25rem",
  fontFamily: "Rajdhani",
  fontWeight: 700,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
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
      variant="dark"
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
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav">
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
              PreSale
            </Link>
            <Link to="/upload" style={navStyle} onClick={handleLinkClick}>
              Upload
            </Link>
            <WalletButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
