import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function InActiveBookingDetail() {
    const imagessource = "/";
    const bookings = [
        {
            id: 1,
            title: 'De Ostyriga',
            screeningdate: new Date('2023-10-14T14:30'),
            theather: 'Salong 1',
            tickets: ['2st normal', ' 2st barn'],
            bookingNbr: 'ABC123',
            img: 'deostyriga.jpeg'
        },
        {
            id: 2,
            title: 'Jaws',
            screeningdate: new Date('2023-10-10T18:30'),
            theather: 'Salong 2',
            tickets: ['2st normal'],
            bookingNbr: 'DEF456',
            img: '12.jpeg'

        }
    ]
    const inActiveBookings = bookings.filter(booking => booking.screeningdate < new Date)

    const options = {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };

    const renderBooking = () => {
        return (
            <>
                {
                    inActiveBookings.map(booking => {
                        return <Container key={booking.id} className="container-loggedInView mt-2 text-light"  >
                            <Row className=' p-4 bg-black'>
                                <Col xs={6} lg={2} className='d-flex justify-content-center p-0'>
                                    <img className='bookingDetail-loggedInView-container-img'
                                        src={imagessource + booking.img} />
                                </Col>
                                <Col xs={6} lg={2} className='py-0'>
                                    <h4>
                                        {booking.title}
                                    </h4>
                                    <h5>
                                        {booking.theather}
                                    </h5>
                                    <h5>
                                        {booking.screeningdate.toLocaleString('sv-SE', options)}
                                    </h5>

                                    <h6>
                                        Biljetter: <br />{booking.tickets.map((ticket, index) => {
                                            return <div key={index} >{ticket}</div>
                                        })}
                                    </h6>
                                    <h6>
                                        Bokningsnummer: <br />  {booking.bookingNbr}
                                    </h6>

                                </Col>
                            </Row>
                        </Container>

                    })
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