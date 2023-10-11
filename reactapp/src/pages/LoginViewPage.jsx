import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import LoggedInView from './LoggedInView';
import axios from 'axios';


const LoginPage = () => {

  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  let userNameFromDB = "mats@gmail.com"
  let passwordFromDB = "123"

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/localhost-for-Backend/login', {
      email: email,
      password: password
    }).then((response) => {
   
      if (response.data.success === true) {
        setMessage("Welcome!")
        navigate('/loggedin');


      } else if (response.statusCode === 401) {
        alert("Invalid email or password");
        setMessage("Invalid email or password")
      }
    }).catch(function (error) {
      console.log("error");
      setMessage("No connection with backend and database")

    });
  }
  
  return (

    <Container className='d-flex justify-content-center align-content-center '>
          <Row className='d-flex justify-content-center align-content-center '>
              <Col className='w-50'>
                    <div className="login-page d-flex justify-content-center align-items-center">
                    <Card className='custom-background w-100'>
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

                    <Button variant="outline-dark" type="submit">Logga in</Button>


                  </div>
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
};

export default LoginPage;