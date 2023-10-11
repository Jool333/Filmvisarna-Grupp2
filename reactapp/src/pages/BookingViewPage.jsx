import React, { useEffect, useState } from 'react';
import { Container, Col, Button, Form } from 'react-bootstrap';
import SeatsGrid from '../components/seatsGrid/SeatsGrid';
import { get } from '@/Apiconnection.jsx'

function BookingViewPage() {
  const [isContinueEnabled, setIsContinueEnabled] = useState(false);


  const handleSeatsSelected = (selectedSeats) => {
    const isSeatsSelected = selectedSeats.length > 1;
    setIsContinueEnabled(isSeatsSelected);
    console.log("isContinueEnabled:", isContinueEnabled);
  };
  const [email, setEmail] = useState('');
  const [IsGuest, setIsGuest] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail('');
  };

  useEffect(() => {
    const isLoggedIn = false /*get("loggedIn");*/
    setIsGuest(!isLoggedIn);
  }, []);

  return (
    <Container>
      <Col >
        <div className="d-flex justify-content-between">
          <span>Transformers</span>
          <span>Salong, Tid</span>
        </div>
        <hr />
      </Col>
      <Col className='d-flex align-items-center justify-content-center pt-3' >
        <SeatsGrid onSeatsSelected={handleSeatsSelected} />
      </Col>
      <Col className='pt-3 pl-9' xs={12} md={6} lg={4} >
        {IsGuest && (
          <Form onSubmit={handleSubmit} className='w-5rem'>
            <Form.Group className="mb-3">
              <Form.Label className="text-light">E-mail:</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                value={email}
                required
              />
            </Form.Group>
          </Form>
        )}
        <Button variant="outline-warning" type='submit' href="/Confirmation">
          Fortsätt
        </Button>
      </Col>
    </Container>

  );
}

export default BookingViewPage;
