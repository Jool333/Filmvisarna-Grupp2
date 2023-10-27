import React, { useEffect, useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import SeatsGrid from '../components/seatsGrid/SeatsGrid';
import { get } from '@/Apiconnection.jsx';
import { useParams } from 'react-router-dom';

function BookingViewPage() {

  const { screeningId } = useParams();
  const [screening, setScreening] = useState(null);

  const options = {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };

  useEffect(() => {
    (async () => {
      setScreening(await get('/screenings/' + screeningId));
    })();
  }, []);

  return !screening ? null : (
    <Container>
      <Col className=' text-light'>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className='m-0'>{screening.title}</h3>
          <div>{screening.theater}, {new Date(screening.screeningDate).toLocaleString('sv-SE', options)}</div>
        </div>
        <hr />
      </Col>
      <Col className='d-flex align-items-center justify-content-center pt-3' >
        <SeatsGrid screening={screening} />
      </Col>

    </Container>

  );
}

export default BookingViewPage;
