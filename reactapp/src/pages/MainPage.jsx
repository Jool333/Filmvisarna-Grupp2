import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Import your custom components here
import BookingViewPage from "./BookingViewPage"; // Replace with the correct import path

function MainPage() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <p>Keyrias MainPage (HOME) </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;
