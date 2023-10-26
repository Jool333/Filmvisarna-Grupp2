import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";


function AgeFilter({ handleAgeChange }) {

  const [ageRating, setAgeRating] = useState("");

  useEffect(() => {
    callBackToTicketView(ageRating)
  }, [ageRating]);

  const handleFilterChange = (e) => {
    const selectedAge = e.target.value;
    setAgeRating(selectedAge);
  }

  const callBackToTicketView = (ar) => {
    handleAgeChange(ar);
  }

  return (
    <Container>
      <Row>
        <div className="bg-filter rounded text-center p-2 my-3">
          <select value={ageRating} onChange={handleFilterChange}>
            <option value="">Alla åldersgränser</option>
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
