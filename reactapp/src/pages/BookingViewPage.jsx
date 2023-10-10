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
        <hr/>
      </Col>
    <Col className='d-flex align-items-center justify-content-center pt-5'>
      <SeatsGrid onSeatsSelected={handleSeatsSelected} />
      </Col>
       <Col className='pt-3' style={{ paddingLeft: '9.3%' }}>
   <Button
       variant="outline-warning"
        href="/ConfirmationPage"
      >
        Fortsätt
       </Button>
     </Col>
  </Container>
  );
}

export default BookingViewPage;
