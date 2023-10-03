import {
    
    Container,
    Nav,
    Navbar
} from 'react-bootstrap';

import logo from '@/images/filmvisarnaLogo.webp';

function MainMenu() {
  return (
      <Navbar expand="lg" className="bg-body-tertiary" >
          <Container fluid>
              <Navbar.Brand href="#"><img src={logo} height="100" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                  >
                      <Nav.Link href="/biljetter">Biljetter</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
              <Nav.Link className="d-inline p-0 m-0" style={{color:'black'}} href="/CreateAccountPage">Logga in</Nav.Link>
          </Container>
      </Navbar>
  );
}

export default MainMenu;