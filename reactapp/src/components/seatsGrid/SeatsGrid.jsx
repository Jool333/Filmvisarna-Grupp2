import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function seatsGrid() {
  
  // const seats = Array(60).fill('');
  const seatsPerRow =  [
    8,
    9,
    10,
    10,
    10,
    10,
    12,
    12
  ];

  return (
    <Container>
      <Row className='justify-content-md-between'>
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
              marginBottom: '10%', 
              maxWidth: '60%',
              maxHeight: '3px',
              backgroundColor: 'gray',
              textAlign: 'center',
              borderRadius: '3px', 
            }}
            s
          >
            <p style={{color: 'white', fontSize: '15px' }}>Bioduk</p>
            </div>
          <div className="chairs-container" style={{ maxWidth: '60%', }}>
            
              {seatsPerRow.map((seats,i) => <Row key={i}><Col className="text-center">
                {new Array(seats).fill(1).map((x,i) => <div className="d-inline-block"> <Button
              variant="light"
              size="sm"
              className="chair-button"
              style={{ margin: '2px', height: '25px', width: '30px' }}
            >
              
            </Button></div>)}
              </Col></Row>)}


          </div> 
        </Col>
      </Row>
    </Container>
  );
}

export default seatsGrid;