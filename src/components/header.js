import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import './style.css';

function IanHeader() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {(loggedIn || loggedInBackup) && Auth.getRole() === 1 ? (<Navbar.Brand href="/adminpanel">
          <img
            alt=""
            src="/images/encanto_logo_nav.png"
            width="90"
            height="30"
            className="d-inline-block align-top"
          /></Navbar.Brand>) : (
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/images/encanto_logo_nav.png"
            width="90"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand> )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default IanHeader;