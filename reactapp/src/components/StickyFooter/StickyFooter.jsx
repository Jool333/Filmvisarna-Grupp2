import { Container, Row, Col } from 'react-bootstrap';

function StickyFooter() {
    return (
        <Container className='mt-5 pt-3 custom-background mw-100 w-100 text-dark'>
            <Row >
                <Col className='d-flex justify-content-center'>
                    <h5>Kontakta oss</h5>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <div>Tel: 0701234567</div>
                </Col>
            </Row>
            <Row >
                <Col className='d-flex justify-content-center'>
                    <div>Email: 1234@Filmvisarna.se</div>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <p>&copy; Copyright 2023 - Grupp 2 Jensen</p>
                </Col>
            </Row>
        </Container>
    );
}

export default StickyFooter;