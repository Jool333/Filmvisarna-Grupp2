import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const movie = {
    embedUrl: "U1fu_sA7XhE",
    imgUrl: "https://images.photowall.com/products/51078/movie-poster-jaws.jpg?h=699&q=85"
};

function TrailerPoster() {

    return (
        <Container>
            <Row className='justify-content-md-center' >
                <Col >
                    <iframe className="embed-responsive-item"
                        src={"https://www.youtube.com/embed/" + `${movie.embedUrl}`}
                        height="100%"
                        width="100%"
                    />
                </Col>
                <Col md="auto"  className="d-flex justify-content-center align-items-center">
                    <Image src={movie.imgUrl} 
                    alt="imgNotFound"
                    height="500rem" />
                </Col>
            </Row>
        </Container>
    );
}

export default TrailerPoster;