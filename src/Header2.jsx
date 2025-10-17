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

const navStyle = {
  color: "white",
  fontSize: "medium",
  fontFamily: "Rajdhani",
  fontWeight: "700",
  padding: "0.5rem",
};

export default function Header2() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="w-100"
      style={{
        padding: "0.5rem 1rem",
      }}
    >
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
          <Image
            src={Logo}
            style={{ height: "3rem", width: "3rem" }}
            roundedCircle
          />
          <span className="d-none d-sm-inline" style={{ fontWeight: "700" }}>
            MaybeArt.IO
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link href="/" style={navStyle}>
              Home
            </Nav.Link>
            <Nav.Link href="/register" style={navStyle}>
              Register
            </Nav.Link>
            <Nav.Link href="/buyToken" style={navStyle}>
              Buy Token
            </Nav.Link>
            <Nav.Link href="/login" style={navStyle}>
              Login
            </Nav.Link>
            <Nav.Link href="/upload" style={navStyle}>
              Upload
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}