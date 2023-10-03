import {
    Button,
    Container,
    Nav,
    Navbar,
    Row,
    Col
} from 'react-bootstrap';

import logo from '@/images/LogoFilmvisarna.webp';

function MainMenu() {
  return (
      <Navbar expand="lg" className="bg-body-tertiary" style={{ backgroundColor: '#CDB991' }}>
          <Container fluid>
                <Nav.Link href="/TicketViewPage" style={{color:"black"}}>Biljetter</Nav.Link>
                <Navbar.Brand  href="/"><img src={logo} height="80rem" /></Navbar.Brand>
                <Button variant="outline-primary" href="/LoginViewPage"> Logga in</Button>
          </Container>
      </Navbar>
  );
}

export default MainMenu;