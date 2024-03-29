import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarComp = () => {
  return (
    <Navbar expand="lg" variant="dark" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home">Simple Notes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Business</Nav.Link>
            <Nav.Link href="#link">Social</Nav.Link>
            <Nav.Link href="#link">Important</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
