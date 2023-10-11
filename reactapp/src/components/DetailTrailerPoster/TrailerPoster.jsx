import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const movie = {
    embedUrl: "U1fu_sA7XhE",
    imgUrl: "https://images.photowall.com/products/51078/movie-poster-jaws.jpg?h=699&q=85"
};

function TrailerPoster() {

    return (
        <Container className='h-300'>
            <Row className='justify-content-md-center' >
                <Col >
                    <iframe className="trailer p-2"
                        src={"https://www.youtube.com/embed/" + `${movie.embedUrl}`}
                    />
                </Col>
                <Col md="auto" className="d-flex justify-content-center align-items-center">
                    <img className='img-max-height-20rem' src={movie.imgUrl}
                        alt="imgNotFound"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default TrailerPoster;