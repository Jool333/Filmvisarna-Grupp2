import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import TrailerPoster from "../components/DetailTrailerPoster/TrailerPoster";
import MovieDetail from "../components/moviedetail/MovieDetail"; 


function MainPage() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <TrailerPoster />
          <MovieDetail /> 
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;
