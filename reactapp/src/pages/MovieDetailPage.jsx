import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import TrailerPoster from "../components/DetailTrailerPoster/TrailerPoster";
import MovieDetail from "../components/moviedetail/MovieDetail";
import { get } from '../ApiConnection.jsx';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const movieId = useParams().id;

  const fetchData = async () => {
    try {
      const moviesData = await get(`movies/${movieId}`);
      setMovie(moviesData);
    } catch (error) {
      console.error('Error fetching movies: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [movieId]);

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <TrailerPoster chosenMovie={movie} />
        </Col>
      </Row>
      <Row>
        <Col>
          <MovieDetail chosenMovie={movie} />
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetails;
