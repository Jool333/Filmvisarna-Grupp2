import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { get } from '../ApiConnection';
import TicketCondenser from '../components/BookingDetail/TicketCondenser';


function BookingView() {
  const bookingId = useParams().id;
  const [booking, setBooking] = useState(null);

  const fetchData = async () => {
    try {
      const bookingData = await get(`bookings/${bookingId}`);
      setBooking(bookingData);
      console.log(bookingData)
    } catch (error) {
      console.error('Error fetching movies: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [bookingId]);

  const options = {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };
  return (

    <Container className="mt-1">
      <div className='text-center pt-3 pb-2'>
        <h1 className='text-light'>
          Bokningsbekräftelse
          <hr />
        </h1>
      </div>
      {booking && (
        <Row className='d-flex align-items-center justify-content-center'>

          <Col xs={8} md={5} className='d-flex align-items-center justify-content-center'>
            <img src={booking.imgUrl} alt="Bokningsbild" className='confirm-poster mw-100 mb-3' />
          </Col>

          <Col xs={12} md={5}>
            <div className="d-flex align-items-center justify-content-center text-light">
              <h2>
                {booking.movie.title}
              </h2>
            </div>
            <div className='pt-3' >
              <div className="d-flex align-items-center justify-content-center text-light">
                <h4>
                  Beställning för {new Date(booking.screeningDate).toLocaleString('sv-SE', options)}
                </h4>
              </div>
              <div className="custom-card custom-background py-2 mb-3 text-center rounded">
                <h3>
                  Bokningsnummer: {booking.bookingNbr}
                </h3>
                <Row>
                  <Col>
                    <>
                      <h6>Platser:</h6>
                      {booking.seats.map((seat, seatIndex) => (
                        <h6 key={seatIndex}>
                          Stolsnr: {seat.seatNbr}, rad: {seat.rowNbr}
                        </h6>
                      ))}
                    </>
                  </Col>
                  <Col>
                    <TicketCondenser booking={booking} />
                  </Col>

                </Row>
              </div>
              <div className="custom-background pt-2 mb-3 d-flex align-items-center justify-content-center rounded" >
                <Col>
                  <p className='text-end'>
                    Genre:&emsp;<br />
                    Åldersgräns:&emsp; <br />
                    Speltid:&emsp;<br /><br />
                    Utförd:&emsp;
                  </p>
                </Col>
                <Col>
                  <p>
                    &emsp;Drama<br />
                    &emsp;{booking.movie.ageLimit} <br />
                    &emsp;{Math.floor(booking.movie.durationMinutes / 60)} {booking.movie.durationMinutes <= 120 ? "timme" : "timmar"} <br />&emsp;{Math.floor(booking.movie.durationMinutes % 60)} {booking.movie.durationMinutes % 60 > 1 ? "minuter" : "minut"} <br />
                    &emsp;{new Date(booking.bookingTime).toLocaleString('sv-SE', options)}
                  </p>
                </Col>

              </div>
            </div>
          </Col>

        </Row>
      )}
    </Container>
  );
};

export default BookingView;