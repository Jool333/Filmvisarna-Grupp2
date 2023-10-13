import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const movie = {
    embedUrl: "U1fu_sA7XhE",
    imgUrl: "https://images.photowall.com/products/51078/movie-poster-jaws.jpg?h=699&q=85"
};

function TrailerPoster() {

    return (
        <Container className='mb-5 w-100' >
            <Row >
                <Col xs={12} lg={9} className="d-flex justify-content-center align-items-center w-70">
                    <iframe className="trailer"
                        src={"https://www.youtube.com/embed/" + `${movie.embedUrl}`}
                    />
                </Col>
                <Col xs={12} lg={3} className="d-flex justify-content-center align-items-center">
                    <img className='img-max-height-20rem'
                        src={movie.imgUrl}
                        alt="imgNotFound"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default TrailerPoster;