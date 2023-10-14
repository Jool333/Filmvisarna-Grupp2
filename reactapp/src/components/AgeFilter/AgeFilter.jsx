import React from "react";
import { Container, Row } from "react-bootstrap";


function AgeFilter({ selectedAge, handleAgeChange }) {
  return (
    <Container>
      <Row>
        <div className="bg-filter text-center p-2 my-3">
          <select value={selectedAge} onChange={handleAgeChange}>
            <option value="all">Alla åldersgränser</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
            <option value="NC-17">NC-17</option>
          </select>
        </div>
      </Row>
    </Container>

  );
}

export default AgeFilter;
