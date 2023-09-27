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
          First, but unordered
        </Col>
        <Col xs={12} md={6} style={middleColStyle}>
          {/* Edit the second Col */}
          Second, but last
        </Col>
        <Col xs={12} md={3} style={firstAndLastColStyle}>
          {/* Edit the third Col */}
          Third, but second
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetail;
