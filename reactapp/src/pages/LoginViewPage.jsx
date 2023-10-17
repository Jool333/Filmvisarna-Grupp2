import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (

    <Container xs={12} md={6} lg={4} className='d-flex justify-content-center align-items-center my-3' >
      <Row >
        <Col className='d-flex justify-content-center align-items-center'>
          <div className="login-page d-flex justify-content-center align-items-center">
            <Card className='custom-background'>
              <Card.Body>
                <Card.Title className="text-center text-dark"><h3>Logga in</h3></Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Row className='d-flex justify-content-center mx-auto align-items-center'>
                    <Form.Group className="mb-3 mx-5">
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
                  </Row>
                  <Row className='d-flex justify-content-center mx-auto align-items-center'>
                    <Col>
                      <Form.Group className="mb-3 ">
                        <Form.Label className="text-dark">Lösenord:</Form.Label>
                        <Form.Control
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className=" d-grid gap-2 mb-3 d-flex justify-content-between align-items-center">
                        <a href="/create-account" className=' text-dark'>
                          Bli Medlem
                        </a>
                        <Button variant="outline-dark" type="submit" href="/loggedin">Logga in</Button>
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

export default LoginPage;
