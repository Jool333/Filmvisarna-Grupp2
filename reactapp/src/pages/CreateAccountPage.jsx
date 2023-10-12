import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

function CreateAccountPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrengthMessage, setPasswordStrengthMessage] = useState('');

  const [showAlert, setShowAlert] = useState(false);

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
    const newPassword = e.target.value;
    setPassword(newPassword);

    let message = '';

    if (newPassword.length < 8) {
      message = 'Lösenordet måste vara minst 8 tecken långt';
    } else if (!/[A-ZÅÄÖ]/.test(newPassword) || !/[a-z]/.test(newPassword) || !/\d/.test(newPassword)) {
      message = 'Lösenordet måste innehålla både stora och små bokstäver samt minst en siffra';
    }


    setPasswordStrengthMessage(message);

    setShowAlert(!!message);

    if (!newPassword || message === '') {

      setShowAlert(false);
    }

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
    <Container >
      <Row>
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <div className="create-account-page d-flex justify-content-center align-items-center">
            <Card className="custom-background w-100"> {/* Använd w-100 för att fylla hela bredden */}
              <Card.Body>
                <Card.Title className="text-center text-dark"><h3>Bli medlem</h3></Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" style={{ marginRight: '10px' }}>
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
                        {showAlert && (
                          <Alert className="custom-alert custom-background">{passwordStrengthMessage}</Alert>
                        )}
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