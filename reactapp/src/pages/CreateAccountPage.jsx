
  import React, { useState } from "react";
  import { Container, Row, Col, Form, Button, Card ,Alert} from 'react-bootstrap';
  import axios from 'axios';
  
  
  function CreateAccountPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
  
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
  
      axios.post('/localhost-for-Backend/create-account', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        confirmPassword: confirmPassword
  
      }).then((response) => {
  
        if (response.data.success === true) {
          setMessage("Welcome!")
          navigate('/login');
  
  
        } else if (response.statusCode === 401) {
          setMessage("Please try later")
        }
      }).catch(function (error) {
        console.log("error");
        setMessage("No connection with backend and database")
  
      });
    };
  
  return (
      <Container >
        <Row>
          <Col xs={12} md={6} lg={4} className="mx-auto">
            <div className="create-account-page d-flex justify-content-center align-items-center">
              <Card style={{ backgroundColor: 'rgb(205, 185, 145)', border: '1px solid #ccc', width: '450px' }}>
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
                          <Button variant="outline-dark" type="submit" >
                            Bli Medlem
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                  <Alert variant="warning" style={{ background: "#CDB991", border: 0 }}>
                    {message}
                  </Alert>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  export default CreateAccountPage;