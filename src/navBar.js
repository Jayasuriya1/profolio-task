import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <div>
      <Navbar bg="black" variant="dark" expand="lg" className="nav-bar">
        <Container>
          <Navbar.Brand href="#home">
            <span className="blue-text">Jayasuriya</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <Nav.Link href="#about-section">ABOUT</Nav.Link>
              <Nav.Link href="#skill-section">SKILL</Nav.Link>
              <Nav.Link href="#project-section">PROJECT</Nav.Link>
              <Nav.Link href="#contact-section">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
