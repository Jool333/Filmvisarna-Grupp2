import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function ChairGrid() {
  
  const chairs = Array(60).fill('');

  return (
    <Container>
      <Row>
        <Col md={3} xs={12}>
         
          <div className="movie-details">
            <h2>Detaljer</h2>
          </div>
        </Col>
        <Col xs={12} md={9}>
          <h3>Välj Stolar</h3>
          {/* Div för bioduk */}
          <div
             className="film-screen"
            style={{
              marginBottom: '25%', 
              backgroundColor: 'gray',
              textAlign: 'center',
              borderRadius: '5px', 
            }}
          >
            <p style={{color: 'white', fontSize: '15px' }}>Bioduk</p>
          </div>
          <Row className="overflow-x-auto">
            {chairs.map((chair, index) => (
              <Col key={index} xs={4} sm={3} md={2} lg={1}>
                <Button
                  variant="light"
                  size="sm"
                  className="chair-button"
                  style={{ margin: '7px', height: '25px', width: '30px' }}
                >
                  {chair}
                </Button>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ChairGrid;
