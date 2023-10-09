import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ConfirmationPage from './ConfirmationPage';

const GuestBookingPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstName('');
    setLastName('');
    setEmail('');
    setConfirmEmail('');
    setPhoneNumber('');
  };
  return (
    <Container className="mt-5">
          <Row>
              <Col>
              <div className="guestbooking-page d-flex justify-content-center align-items-center">
              <Card style={{ backgroundColor: 'rgb(205, 185, 145)', border: '1px solid #ccc', width: '450px' }}>
                  <Card.Body>
                    <Card.Title className="text-center text-dark"><h3>Logga in som gäst</h3></Card.Title>
                    <Form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-between">
                      <Form.Group style={{ marginRight: '10px' }}>
                        <Form.Label className="text-dark">Förnamn:</Form.Label>
                        <Form.Control
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={firstName}
                          onChange={handleFirstNameChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="text-dark">Efternamn:</Form.Label>
                        <Form.Control
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={lastName}
                          onChange={handleLastNameChange}
                          required
                        />
                      </Form.Group>
                      </div>
                      <Form.Group>
                        <Form.Label className="text-dark">E-post:</Form.Label>
                        <Form.Control
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={handleEmailChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="text-dark">Bekräfta E-post:</Form.Label>
                        <Form.Control
                          type="email"
                          id="confirmEmail"
                          name="confirmEmail"
                          value={confirmEmail}
                          onChange={handleConfirmEmailChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group style={{ marginBottom: '20px' }}>
                        <Form.Label className="text-dark">Telefonnummer:</Form.Label>
                        <Form.Control
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          required
                        />
                      </Form.Group>

                      <div className="d-flex justify-content-between align-items-center">
                        <a href="./CreateAccountPage" style={{color:'black'}}>
                          Skapa konto
                        </a>
                        <Link to="/ConfirmationPage"> {ConfirmationPage}
                          <Button variant="outline-dark" type="submit">Fortsätt</Button>
                        </Link>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
                    </div>
              </Col>
          </Row>
    </Container>
  );
};

export default GuestBookingPage;
