import React, { useEffect, useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import SeatsGrid from '../components/seatsGrid/SeatsGrid';
import { get } from '@/Apiconnection.jsx';
import { useParams } from 'react-router-dom';

function BookingViewPage() {
  const [seats, setSeats] = useState(null);

  const { screeningId } = useParams();
  const [screening, setScreening] = useState(null);

  useEffect(() => {
    (async () => {
      setScreening(await (await fetch('/api/screenings/' + screeningId)).json());
    })();
  }, []);


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

  return !screening ? null : (
    <Container>
      <Col className=' text-light'>
        <div className="d-flex justify-content-between">
          <span>Transformers</span>
          <span>Salong, Tid</span>
        </div>
        <hr />
      </Col>
      <Col className='d-flex align-items-center justify-content-center pt-3' >
        <SeatsGrid onSeatsSelected={handleSeatsSelected} screening={screening} />
      </Col>

    </Container>

  );
}

export default BookingViewPage;
