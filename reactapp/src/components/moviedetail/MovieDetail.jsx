import { Container, Row, Col } from 'react-bootstrap';

function MovieDetail() {
  const firstAndLastColStyle = {
    backgroundColor: 'gray',
    height: '300px', 
  };

  const middleColStyle = {
    backgroundColor: 'green',
    height: '300px', 
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={3} style={firstAndLastColStyle}>
          {/* Edit the first Col */}
          Detaljer
        </Col>
        <Col xs={12} md={6} style={middleColStyle}>
          {/* Edit the second Col */}
          Tid
        </Col>
        <Col xs={12} md={3} style={firstAndLastColStyle}>
          {/* Edit the third Col */}
          Beskrivning
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetail;
