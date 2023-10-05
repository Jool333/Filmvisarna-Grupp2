import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const BookingView = () => {

  const previousBookings = [
    { id: 1, movie: 'Film A', date: '2023-01-15' },
    { id: 2, movie: 'Film B', date: '2023-02-20' },
  ];

  const activeBookings = [
    { id: 3, movie: 'Film C', date: '2023-03-10' },
    { id: 4, movie: 'Film D', date: '2023-04-05' },
  ];

  return (
    <Container>
      <h1>Mina Bokningar</h1>

      <Row>
        <Col md={10}>
          <h2>Aktiva Bokningar</h2>
          <ListGroup>
            {activeBookings.map((booking) => (
              <ListGroup.Item key={booking.id}>
                {booking.movie} - {booking.date}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      <br />

      <Row>
        <Col md={10}>
          <h2>Tidigare Bokningar</h2>
          <ListGroup>
            {previousBookings.map((booking) => (
              <ListGroup.Item key={booking.id}>
                {booking.movie} - {booking.date}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingView;
