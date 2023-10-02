import { Container, Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <Container >
      <Row className='justify-content-md-between'>
        <Col md="auto">
          <h2> Biljetter</h2>
        </Col>
        <Col md="auto">
          <div>
            <h1> image</h1>
          </div>
        </Col>
        <Col md="auto">
          <h2> logga in </h2>

        </Col>
      </Row>

    </Container>
  );
}

export default Header;