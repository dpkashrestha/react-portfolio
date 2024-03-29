// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary header"
      bg="dark"
      data-bs-theme="dark"
      style={{ backgroundColor: "#6b9080" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          Dipika Shrestha
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav variant="underline" defaultActiveKey="/">
            <Nav.Link as={Link} to="/">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/resume">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
