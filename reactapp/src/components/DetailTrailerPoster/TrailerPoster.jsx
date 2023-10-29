import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function TrailerPoster({ chosenMovie }) {
    const [movie, setMovie] = useState('');

    const fetchData = async () => {
        try {
            const movieData = await chosenMovie;
            setMovie(movieData);
        } catch (error) {
            console.error('Error fetching movies: ', error);
        }
    };

    useEffect(() => {
        if (chosenMovie)
            fetchData();
    }, [chosenMovie]);

    return (
        <Container className='w-100' >
            <Row className='flex justify-content-center  h-100'>
                <Col sm={12} md={8} lg={9} className=" d-flex justify-content-center align-items-center p-0">
                    <iframe className=" trailer h-100 w-100"
                        src={`https://www.youtube.com/embed/${movie.trailerUrl}?autoplay=1`}
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                    />
                </Col>
                <Col xs={6} md={4} lg={3} className="d-flex justify-content-center align-items-center">
                    <img className='detail-poster'
                        src={movie.imgUrl}
                        alt="imgNotFound"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default TrailerPoster;