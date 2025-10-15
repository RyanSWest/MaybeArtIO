import WalletButton from "./WalletButton";
import { useWalletTransactionSignAndSend } from "./useTransactionSignandSend";
import "./Header.css";
import {
  Navbar,
  NavItem,
  Nav,
  Image,
  NavDropdown,
  ToggleButton,
} from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import Logo from "./imgs/Logo.png";
export default function Header() {
  return (
    // <div className= ''  >

    <Navbar
      className="me-auto"
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      style={{
        height: "7rem",
        padding: "1rem",
        position: "absolute",
        width: "100%",
      }}
    >
      <Navbar.Brand>
        {" "}
        MaybeArt.IO
        <Image
          src={Logo}
          style={{ height: "6rem", padding: "1rem" }}
          roundedCircle
        />
      </Navbar.Brand>
      {/* <Image src= {Logo}style= {{heigth:'7rem'}} roundedCircle/> */}
      {/* <Navbar.Nav.Item to='/upload'> Upload</Navbar.Nav.Item> */}

      <a href="/">
        {" "}
        <span
          style={{
            padding: "1rem",
            color: "white",
            fontSize: "medium",
            fontFamily: "Rajdhani",
            fontStyle: "bolder",
            fontWeight: "700",
            padding: "1rem",
          }}
        >
          {" "}
          Home
        </span>{" "}
      </a>

      <Nav.Link href="/register">
        <span
          style={{
            color: "white",
            fontSize: "medium",
            fontFamily: "Rajdhani",
            fontStyle: "bolder",
            fontWeight: "700",
            padding: "1rem",
          }}
        >
          {" "}
          Register
        </span>
      </Nav.Link>

      <Link to="/buyToken">
        <span
          style={{
            color: "white",
            fontSize: "medium",
            fontFamily: "Rajdhani",
            fontStyle: "bolder",
            fontWeight: "700",
            padding: "1rem",
          }}
        >
          {" "}
          Login
        </span>
      </Link>

      <Nav.Link href="/login">
        <span
          style={{
            color: "white",
            fontSize: "medium",
            fontFamily: "Rajdhani",
            fontStyle: "bolder",
            fontWeight: "700",
            padding: "1rem",
          }}
        >
          {" "}
          Login
        </span>
      </Nav.Link>

      <Nav.Link href="/about">
        <Nav.Item href="/about">
          {" "}
          <span
            style={{
              color: "white",
              fontSize: "medium",
              fontFamily: "Rajdhani",
              fontStyle: "bolder",
              fontWeight: "700",
              padding: "1rem",
            }}
          >
            {" "}
            About
          </span>{" "}
        </Nav.Item>
      </Nav.Link>
      <Nav.Link href="/auction">
        <span
          style={{
            color: "white",
            fontSize: "medium",
            fontFamily: "Rajdhani",
            fontStyle: "bolder",
            fontWeight: "700",
            padding: "1rem",
          }}
        >
          {" "}
          Auction
        </span>
      </Nav.Link>

      <Nav.Link href="/upload">
        <Nav.Item>
          {" "}
          <span
            style={{
              color: "white",
              fontSize: "medium",
              fontFamily: "Rajdhani",
              fontStyle: "bolder",
              fontWeight: "700",
              padding: "1rem",
            }}
          >
            {" "}
            Upload
          </span>{" "}
        </Nav.Item>
      </Nav.Link>

      <Nav.Link href="/grid">
        <span
          style={{
            color: "white",
            fontSize: "medium",
            fontFamily: "Rajdhani",
            fontStyle: "bolder",
            fontWeight: "700",
            padding: "1rem",
          }}
        >
          NFT Gallery
        </span>
      </Nav.Link>

      <Nav.Link href="/whitepaper">
        whitepaper
        <span
          style={{
            color: "white",
            fontSize: "medium",
            fontFamily: "Rajdhani",
            fontStyle: "bolder",
            fontWeight: "700",
            padding: "1rem",
          }}
        >
          {" "}
          Whitepaper
        </span>
      </Nav.Link>

      <Navbar.Collapse mountOnEnter>
        <NavDropdown></NavDropdown>
        <ToggleButton onChange={true} style={{ id: "toggle" }}>
          {" "}
        </ToggleButton>
      </Navbar.Collapse>
      <WalletButton />

      <li>xxx</li>
    </Navbar>

    // </div>
  );
}
