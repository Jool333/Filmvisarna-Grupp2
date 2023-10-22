import React, { useEffect, useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import SeatsGrid from '../components/seatsGrid/SeatsGrid';
import { get } from '@/Apiconnection.jsx'

function BookingViewPage() {
  const [seats, setSeats] = useState(null);

  useEffect(() => {
    (async () => {
      const allSeats = await get('seats');
      console.log(allSeats)
      setSeats(allSeats)
    })();
  }, []);

  const [isContinueEnabled, setIsContinueEnabled] = useState(false);

  const handleSeatsSelected = (selectedSeats) => {
    const isSeatsSelected = selectedSeats.length > 1;
    setIsContinueEnabled(isSeatsSelected);
    console.log("isContinueEnabled:", isContinueEnabled);
  };

  return (
    <Container>
      <Col className=' text-light'>
        <div className="d-flex justify-content-between">
          <span>Transformers</span>
          <span>Salong, Tid</span>
        </div>
        <hr />
      </Col>
      <Col className='d-flex align-items-center justify-content-center pt-3' >
        <SeatsGrid onSeatsSelected={handleSeatsSelected} />
      </Col>

    </Container>

  );
}

export default BookingViewPage;
