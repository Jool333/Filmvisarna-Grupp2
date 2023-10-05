import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

const BookingView = () => {
  // Dummy data för tidigare och aktiva bokningar
  const previousBookings = [
    { id: 1, movie: 'Film A', date: '2023-01-15' },
    { id: 2, movie: 'Film B', date: '2023-02-20' },
  ];

  const activeBookings = [
    { id: 3, movie: 'Film C', date: '2023-03-10' },
    { id: 4, movie: 'Film D', date: '2023-04-05' },
  ];

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div className="guestbooking-page d-flex justify-content-center align-items-center">
            <Card style={{ backgroundColor: 'rgb(205, 185, 145)', border: '1px solid #ccc' }}>
              <Card.Body>
                <Card.Title className="text-center text-dark">
                  <h3>Mina Bokningar</h3>
                </Card.Title>

                <Col>
                  <h2>Aktiva Bokningar</h2>
                  <ListGroup>
                    {activeBookings.map((booking) => (
                      <ListGroup.Item key={booking.id}>
                        {booking.movie} - {booking.date}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>

                <Col>
                  <h2>Tidigare Bokningar</h2>
                  <ListGroup>
                    {previousBookings.map((booking) => (
                      <ListGroup.Item key={booking.id}>
                        {booking.movie} - {booking.date}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingView;
