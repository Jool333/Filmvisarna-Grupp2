import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import TicketCondenser from './TicketCondenser';

function InActiveBookingDetail({ userBooking }) {

    const options = {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };

    const renderBooking = () => {
        return (
            <>
                {userBooking.map((booking, index) => (
                    <Container key={index} className="container-loggedInView mt-3 text-light"  >
                        <Row className=' p-4 bg-black rounded-4'>
                            <Col xs={6} lg={3} className='d-flex justify-content-center align-items-start p-0 '>
                                <img className='mw-100 mh-100'
                                    src={booking.imgUrl} />
                            </Col>
                            <Col xs={5} lg={4} className='py-0'>
                                <h2>
                                    {booking.movie.title}
                                </h2>
                                <h5>
                                    {booking.theater}
                                </h5>
                                <h5>
                                    {new Date(booking.screeningDate).toLocaleString('sv-SE', options)}
                                </h5>
                                <h6>
                                    Biljetter: </h6>
                                <h6><TicketCondenser booking={booking} /></h6>
                                <h6>
                                    Platser:
                                </h6>
                                {booking.seats.map((seat, seatIndex) => (
                                    <h6 key={seatIndex}>
                                        Stolsnr: {seat.seatNbr}, rad: {seat.rowNbr}
                                    </h6>
                                ))}
                                <h6>
                                    Bokningsnummer: <br />  {booking.bookingNbr}
                                </h6>

                            </Col>
                        </Row>
                    </Container>

                ))
                }
            </>
        )
    };

    return (
        <>
            <h4> Tidigare Bokningar</h4>
            {renderBooking()}
        </>
    );
}

export default InActiveBookingDetail;