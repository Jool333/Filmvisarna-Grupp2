import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function seatsGrid() {
  
  const seats = Array(60).fill('');

  return (
    <Container>
      <Row>
        <Col md={3} xs={12} >
         
          <div className="movie-details">
            <h2>Detaljer</h2>
          </div>
        </Col>
        <Col xs={12} md={9} >
          <h3 style={{maxWidth:'60%'}}>Välj Stolar</h3>
          {/* Div för bioduk */}
          <div 
             className="film-screen"
            style={{
              marginBottom: '25%', 
              maxWidth: '60%',
              backgroundColor: 'gray',
              textAlign: 'center',
              borderRadius: '3px', 
            }}
          >
            <p style={{color: 'white', fontSize: '15px' }}>Bioduk</p>
            </div>
          <div className="chairs-container" style={{ maxWidth: '60%', }}>
            <Row >
              {seats.map((seats, index) => (
                <Col>
                  <Button
                    variant="light"
                    size="sm"
                    className="chair-button"
                    style={{ margin: '2px', height: '25px', width: '30px' }}
                  >
                    {seats}
                  </Button>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default seatsGrid;