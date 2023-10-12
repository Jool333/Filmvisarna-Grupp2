import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';


function CreateAccountPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <Container xs={12} md={6} lg={4} className='d-flex justify-content-center align-items-center mt-3' >
      <Row className='h-100 w-100'>
        <Col className='d-flex justify-content-center align-items-center' >
          <div className="create-account-page d-flex justify-content-center align-items-center">
            <Card className="custom-background">
              <Card.Body>
                <Card.Title className="text-center text-dark"><h3>Bli medlem</h3></Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Row className='d-flex justify-content-center mx-auto align-items-center'>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-dark">E-mail:</Form.Label>
                        <Form.Control
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={handleEmailChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-dark">Lösenord:</Form.Label>
                        <Form.Control
                          type="password"
                          id="password"
                          name="password"
                          value={password}
                          onChange={handlePasswordChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-dark">Bekräfta Lösenord:</Form.Label>
                        <Form.Control
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
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
                      <Form.Group className="mb-3">
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
                      <Form.Group className="mb-3">
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
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="text-center">
                      <div className="d-grid gap-2 mb-3">
                        <Button variant="outline-dark" type="submit" href="/login">
                          Bli Medlem
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default CreateAccountPage;   