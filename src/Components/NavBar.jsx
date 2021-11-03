import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="fs-4" >Cadmus</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fs-5">
            <Link role="button" className="nav-link" to="/">
              Home
            </Link>

            <Link role="button" className="nav-link" to="/blogs">
              Blogs
            </Link>

            <Link role="button" className="nav-link" to="/joinus">
              Join Us
            </Link>
            <Link role="button" className="nav-link" to="/aboutus">
              About Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
