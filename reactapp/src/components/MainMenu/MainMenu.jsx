import {
  Container,
  Navbar,
  Dropdown,
  ButtonGroup,
  Button
} from 'react-bootstrap';


function MainMenu() {
  return (
    <Navbar className='custom-background'>
      <Container className='d-flex justify-content-between align-items-center p-0'>
        <Button href="/Tickets" variant='outline-dark' className=' border-0 h-100' ><h6 className='m-0 p-1'>Biljetter</h6></Button>
        <Navbar.Brand href="/" className=' m-0'><img src='/LogoFilmvisarna.webp' className='mw-100 img-max-height-5rem' alt='Filmvisarna' /></Navbar.Brand>
        <Dropdown as={ButtonGroup} align="end">
          <Button variant='outline-dark' href='/login' className='border-0 text-nowrap' ><h6 className='m-0 p-1'>Logga in</h6></Button>
          <Dropdown.Toggle split variant="outline-dark" id="login-dropdown" className='border-0' />
          <Dropdown.Menu >
            <Dropdown.Item href="/login">Logga in</Dropdown.Item>
            <Dropdown.Item href="/create-account">Bli Medlem</Dropdown.Item>
            <Dropdown.Item href="/loggedin">Mina bokningar</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default MainMenu;