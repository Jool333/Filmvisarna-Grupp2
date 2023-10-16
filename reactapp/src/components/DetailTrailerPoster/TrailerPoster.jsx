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


    console.log("tp" + movie.trailerUrl)
    return (
        <Container className='mb-5 w-100' >
            <Row >
                <Col xs={12} lg={9} className="d-flex justify-content-center align-items-center w-70">
                    <iframe className="trailer"
                        src={"https://www.youtube.com/embed/" + `${movie.trailerUrl}`}
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