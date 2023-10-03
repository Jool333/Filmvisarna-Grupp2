import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
            <Container >
                <Row className='justify-content-md-between'>
                    <Col md="auto">
                      <h3>Kontakta oss</h3>
                      <ul className="list-unstyled">
                        <li><a href="#">Kundservice</a></li>
                        <li><a href="#">Karriär</a></li>
                        <li><a href="#">Investerare</a></li>
                      </ul>
                    </Col>
                    <Col md="auto">
                      <h3>Information</h3>
                      <ul className="list-unstyled">
                        <li><a href="#">Om oss</a></li>
                        <li><a href="#">Personuppgiftspolicy</a></li>
                        <li><a href="#">Allmänna villkor</a></li>
                      </ul>
                    </Col>
                    <Col md="auto">
                      <h3>Tipsa oss</h3>
                      <ul className="list-unstyled">
                        <li><a href="#">0701234567</a></li>
                        <li><a href="#">1234@Filmvisarna.se</a></li>
                      </ul>
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

export default Footer;