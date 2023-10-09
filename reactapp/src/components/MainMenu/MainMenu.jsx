import {
    Container,
    Nav,
    Navbar,
    Dropdown
} from 'react-bootstrap';

import logo from '@/images/LogoFilmvisarna.webp';

const NavbarStyle = {
    backgroundColor: '#CDB991',
    color: 'black'
  };

function MainMenu() {
  return (
      <Navbar expand="lg"  style={NavbarStyle}>
          <Container fluid >
                <Nav.Link href="/TicketViewPage" style={{color:"black"}}>Biljetter</Nav.Link>
                <Navbar.Brand  href="/"><img src={logo} height="80rem" /></Navbar.Brand>
                <Dropdown>
                <Dropdown.Toggle variant="outline-dark" id="login-dropdown" style={{border:"none"}}>
                  Logga in
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/LoginViewPage">Logga in</Dropdown.Item>
                  <Dropdown.Item href="/CreateAccountPage">Bli Medlem</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </Container>
      </Navbar>
  );
}

export default MainMenu;