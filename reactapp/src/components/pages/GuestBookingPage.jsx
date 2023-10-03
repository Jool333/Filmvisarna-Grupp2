import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

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
                <Card>
                  <Card.Body>
                    <Card.Title className="text-center">Logga in som gäst</Card.Title>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group>
                        <Form.Label>Förstanamn :</Form.Label>
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
                        <Form.Label>Efternamn :</Form.Label>
                        <Form.Control
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={lastName}
                          onChange={handleLastNameChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>E-post:</Form.Label>
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
                        <Form.Label>Bekräfta E-post:</Form.Label>
                        <Form.Control
                          type="email"
                          id="confirmEmail"
                          name="confirmEmail"
                          value={confirmEmail}
                          onChange={handleConfirmEmailChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Telefonnummer:</Form.Label>
                        <Form.Control
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          required
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit" block>Fortsätt</Button>
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
