import React from "react";
import {Navbar,Nav,Container} from "react-bootstrap";

function NavBar() {
  return (
    <Navbar expand bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Cadmus</Navbar.Brand>
    <Nav className="ms-4">
      <Nav.Link  className="" href="#home">Home</Nav.Link>
      <Nav.Link  className="" href="#features">About Us</Nav.Link>
      <Nav.Link  className="" href="#pricing">Join Us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;
