import React from "react";
import { Container, Row } from "react-bootstrap";


function AgeFilter({ selectedAge, handleAgeChange }) {
  return (
    <Container>
      <Row>
        <div className="filter">
          <select value={selectedAge} onChange={handleAgeChange}>
            <option value="all">Välj åldersgräns</option>
            <option value="7">7 år</option>
            <option value="12">12 år</option>
            <option value="15">15 år</option>
            <option value="18">18 år</option>
          </select>
        </div>
      </Row>
    </Container>

  );
}

export default AgeFilter;
