import React, { useState } from 'react';
import { Container, Col, Button } from 'react-bootstrap';
import SeatsGrid from '../components/seatsGrid/SeatsGrid';

function BookingViewPage() {
  const [isContinueEnabled, setIsContinueEnabled] = useState(false);

  // Callback-funktion som aktiverar/inaktiverar "Fortsätt"-knappen baserat på valda platser
  const handleSeatsSelected = (selectedSeats) => {
    const isSeatsSelected = selectedSeats.length > 1;
    setIsContinueEnabled(isSeatsSelected);
    console.log("isContinueEnabled:", isContinueEnabled); // Lägg till en konsollogg här för att felsöka
  };

  return (
    <Container>
<Col>
  <div className="d-flex justify-content-between">
    <span>Transformers</span>
    <span>Salong, Tid</span>
  </div>
  <hr />
</Col>
       <Col style={{paddingTop:'15%', }}>
        <SeatsGrid onSeatsSelected={handleSeatsSelected} />
      </Col>
      <Col>
        <Button
          variant="outline-primary"
          href="/LoginViewPage"
          disabled={!isContinueEnabled} // Inaktivera om inga platser är valda
        >
          Fortsätt
        </Button>
      </Col>
    </Container>
  );
}

export default BookingViewPage;
