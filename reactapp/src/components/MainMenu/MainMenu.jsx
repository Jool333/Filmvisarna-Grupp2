import {
    Button,
    Container,
    Nav,
    Navbar,
    Row,
    Col
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
                <Button variant="outline-dark" href="/LoginViewPage"> Logga in</Button>
          </Container>
      </Navbar>
  );
}

export default MainMenu;