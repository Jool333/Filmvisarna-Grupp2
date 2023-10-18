import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { post } from "../ApiConnection";

function CreateAccountPage() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
  };
  const [formData, setFormData] = useState(initialFormData)
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrengthMessage, setPasswordStrengthMessage] = useState('');
  const [passwordMatchhMessage, setPasswordMatchMessage] = useState('');
  const [passValid, setPassValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showMatchAlert, setShowMatchAlert] = useState(false);

  const resetForm = () => {
    setFormData(initialFormData);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkPasswordRules = () => {
    const newPassword = formData.password
    let message = '';
    if (newPassword.length < 8) {
      message = 'Lösenordet måste vara minst 8 tecken långt';
    } else if (!/[A-ZÅÄÖ]/.test(newPassword) || !/[a-z]/.test(newPassword) || !/\d/.test(newPassword)) {
      message = 'Lösenordet måste innehålla både stora och små bokstäver samt minst en siffra';
    }
    setPasswordStrengthMessage(message);

    setShowAlert(!!message);

    if (message === '') {
      setShowAlert(false);
      setPassValid(true);
    }
  };

  useEffect(() => {
    if (formData.password !== '') {
      checkPasswordRules();
      checkPasswordMatch();
    }
  }, [formData.password]);

  const checkPasswordMatch = () => {
    let message = '';
    if (formData.password != confirmPassword) {
      message = 'Lösenorden stämmer inte överens'
    }
    setPasswordMatchMessage(message)
    setShowMatchAlert(!!message)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    if (confirmPassword !== '') {
      checkPasswordMatch();
    }
  }, [confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passValid) {
      var regUserData = {
        Email: formData.email.toLowerCase(),
        Password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber
      }
      try {
        var result = await post('users/register', regUserData);
        if (result && result.error) {
          alert('Registrering misslyckades. ' + result.error);
          return;
        }
        alert('Registrering lyckades');
        resetForm();
      } catch (error) {

        console.log(error)
      }
      window.location.href = '/login'
    }
  };

  return (
    <Container xs={12} md={6} lg={4} className='d-flex justify-content-center align-items-center mt-3' >
      <Row className='h-100 w-100'>
        <Col className='d-flex justify-content-center align-items-center' >
          <div className="create-account-page d-flex justify-content-center align-items-center">

            <Card className="custom-background w-100"> {/* Använd w-100 för att fylla hela bredden */}
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
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-dark">Lösenord:</Form.Label>
                        <Form.Control
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
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
                        {showMatchAlert && (
                          <Alert className="custom-alert custom-background">{passwordMatchhMessage}</Alert>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-dark">Förnamn:</Form.Label>
                        <Form.Control
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-dark">Efternamn:</Form.Label>
                        <Form.Control
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-dark">Telefonnummer:</Form.Label>
                        <Form.Control
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="text-center">
                      <div className="d-grid gap-2 mb-3">
                        <Button variant="outline-dark" type="submit">
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