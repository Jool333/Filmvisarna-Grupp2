import { Container, Row, Col, } from 'react-bootstrap';

function MovieDetail() {
  return (
    <Container>
      <Row>
        <Col xs={{ order: 1}}>First, but unordered</Col>
        <Col xs={{ order: 2}}>Second, but last</Col>
        <Col xs={{ order: 3}}>Third, but second</Col>
      </Row>
    </Container>
  );
}

export default MovieDetail;