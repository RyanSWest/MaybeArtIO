import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import{Navbar,Button,Image, Container} from 'react-bootstrap';
import Logo from './imgs/Logo.png'
function Footer() {
  return (
   <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="bottom"
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

       <Button></Button>
      </Container>
    </Navbar>

 
  );
}

export default Footer;