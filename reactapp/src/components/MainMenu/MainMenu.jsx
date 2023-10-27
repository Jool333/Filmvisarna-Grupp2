import { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Navbar,
  Dropdown,
  ButtonGroup,
  Button
} from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { del } from '../../ApiConnection';


function MainMenu({ user }) {

  const navigate = useNavigate();

  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userStatus = (user != 0 && user != null)
    setIsLoggedIn(userStatus);
  }, [user]);

  async function logout() {
    await del('users')
    window.location.href = '/'
  }

  function gotoTickets() {
    navigate('/tickets')
  }
  function gotoLogin() {
    navigate('/login')
  }


  return (
    <Navbar className='custom-background'>
      <Container className='d-flex justify-content-between align-items-center p-0'>
        <Button variant='outline-dark' onClick={() => gotoTickets()} className=' border-0 h-100' ><h6 className='m-0 p-1'>Biljetter</h6></Button>
        <Navbar.Brand className=' m-0'><NavLink to="/"><img src='/LogoFilmvisarna.webp' className='mw-100 img-max-height-5rem' alt='Filmvisarna' /></NavLink></Navbar.Brand>
        {isLoggedin ?
          <Dropdown as={ButtonGroup} align="end">
            <Button variant='outline-dark' className='border-0 text-nowrap' onClick={() => logout()} ><h6 className='m-0 p-1'>Logga ut</h6></Button>
            <Dropdown.Toggle split variant="outline-dark" id="login-dropdown" className='border-0' />
            <Dropdown.Menu >
              <Row className='m-2'>
                <NavLink to="/loggedin">Mina bokningar</NavLink>
              </Row>
            </Dropdown.Menu>
          </Dropdown>
          :
          <Dropdown as={ButtonGroup} align="end">
            <Button variant='outline-dark' onClick={() => gotoLogin()} className='border-0 text-nowrap' ><h6 className='m-0 p-1'>Logga in</h6></Button>
            <Dropdown.Toggle split variant="outline-dark" id="login-dropdown" className='border-0' />
            <Dropdown.Menu >
              <Row className='m-2'>
                <NavLink to="/login">Logga in</NavLink>
              </Row>
              <Row className='m-2'>
                <NavLink to="/create-account">Bli Medlem</NavLink>
              </Row>
            </Dropdown.Menu>
          </Dropdown>
        }

      </Container>
    </Navbar>
  );
}

export default MainMenu;