import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import TicketCondenser from './TicketCondenser';

function ActiveBookingDetail({ userBooking }) {
    console.log("a", userBooking)

    const options = {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };

    const renderBookings = () => {
        return (
            <>
                {userBooking.map((booking, index) => (
                    <Container key={index} className="container-loggedInView mt-3 text-light"  >
                        <Row className=' pt-4 px-4 bg-black rounded-top-4'>
                            <Col xs={6} lg={3} className='d-flex justify-content-center align-items-start p-0 '>
                                <img className='mw-100 mh-100'
                                    src={booking.imgUrl}
                                    alt={booking.movie.title} />
                            </Col>
                            <Col xs={6} lg={4} className='py-0'>
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

                        <Row className='bookingDetail-loggedInView-container pt-2 bg-black rounded-bottom-4'>
                            <Col className='px-4 d-flex justify-content-end'>
                                <Button variant='light' className='text-dark mb-3 border-0 custom-background'> Avboka </Button>
                            </Col>
                        </Row >

                    </Container >

                ))
                }
            </>
        )
    };

    return (
        <>
            <h4> Aktiva Bokningar</h4>
            {renderBookings()}
        </>
    );
}

export default ActiveBookingDetail;