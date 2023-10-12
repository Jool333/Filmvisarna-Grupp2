import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoggedInView from './LoggedInView';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail('');
    setPassword('');
  };
  return (

    <Container xs={12} md={6} lg={4} className='d-flex justify-content-center mx-auto align-items-center' >
      <Row >
        <Col >
          <div className="login-page d-flex justify-content-center align-items-center">
            <Card className='custom-background'>
              <Card.Body>
                <Card.Title className="text-center text-dark"><h3>Logga in</h3></Card.Title>
                <Form onSubmit={handleSubmit}>
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
                  <div className=" d-grid gap-2 mb-3 d-flex justify-content-between align-items-center">
                    <a href="/create-account" className=' text-dark'>
                      Bli Medlem
                    </a>
                    <Link to="/loggedin"> {LoggedInView}
                      <Button variant="outline-dark" type="submit">Logga in</Button>
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

export default LoginPage;
