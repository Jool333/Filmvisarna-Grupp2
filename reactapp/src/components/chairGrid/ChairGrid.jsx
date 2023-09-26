import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function ChairGrid() {
  // Sample data for chairs
  const chairs = [
    'Chair 1',
    'Chair 2',
    'Chair 3',
    'Chair 4',
    'Chair 5',
    'Chair 6',
    'Chair 7',
    'Chair 8',
    'Chair 9',
    'Chair 10',
    'Chair 11',
    'Chair 12',
    'Chair 13',
    'Chair 14',
    'Chair 15',
    'Chair 16',
    'Chair 17',
    'Chair 18',
    'Chair 19',
    'Chair 20',
    'Chair 21',
    'Chair 22',
    'Chair 23',
    'Chair 24',
    'Chair 25',
    'Chair 26',
    'Chair 27',
    'Chair 28',
    'Chair 29',
    'Chair 30',
    'Chair 31',
    'Chair 32',
    'Chair 33',
    'Chair 34',
    'Chair 35',
    'Chair 36',

  ];

  return (
    <Container>
      <h1>Chair Grid</h1>
      <Row>
        {chairs.map((chair, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2}>
            <Button variant="primary" className="chair-button">
              {chair}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ChairGrid;
