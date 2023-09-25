import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    NavDropdown
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
                      <NavDropdown title="Link" id="navbarScrollingDropdown">
                          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action4">
                              Another action
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action5">
                              Something else here
                          </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#" disabled>
                          Link
                      </Nav.Link>
                  </Nav>
                  
                  
              </Navbar.Collapse>
              <Button variant="outline-primary"> Logga in</Button>
          </Container>
      </Navbar>
  );
}

export default MainMenu;