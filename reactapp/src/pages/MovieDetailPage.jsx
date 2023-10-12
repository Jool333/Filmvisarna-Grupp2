import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import TrailerPoster from "../components/DetailTrailerPoster/TrailerPoster";
import MovieDetail from "../components/moviedetail/MovieDetail";


function MovieDetails() {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <TrailerPoster />
        </Col>
      </Row>
      <Row>
        <Col>
          <MovieDetail />
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetails;
