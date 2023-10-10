import { Container, Row, Col } from 'react-bootstrap';

function StickyFooter() {
    return (
            <Container className='footer-main mt-5'>
                <Row className='justify-content-md-around'>
                    <Col md="auto">
                      <h3>Kontakta oss</h3>
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col md="auto">
                      <div>Tel: 0701234567</div>
                    </Col>
                    <Col md="auto">
                    <div>Email: 1234@Filmvisarna.se</div>
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col md="auto">
                    <p>&copy; Copyright 2023 - Grupp 2 Jensen</p>
                    </Col>
                </Row>
          </Container>
    );
}

export default StickyFooter;