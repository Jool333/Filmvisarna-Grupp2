import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Import your custom components here
import TrailerPoster from "../components/DetailTrailerPoster/TrailerPoster";// Replace with the correct import path
import MovieDetail from "../components/moviedetail/MovieDetail"; // Replace with the correct import path


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
