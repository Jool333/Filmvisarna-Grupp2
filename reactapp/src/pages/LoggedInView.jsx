import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ActiveBookingDetail from '../components/BookingDetail/ActiveBookingDetail'
import InActiveBookingDetail from '../components/BookingDetail/InActiveBookingDetail';
import { get } from '../ApiConnection';
import { useOutletContext } from 'react-router-dom';




function LoggedInView() {

    const userId = useOutletContext().user;
    const [booking, setBooking] = useState([]);


    const fetchBookings = async () => {
        try {
            const bookingData = await get(`bookings/user/${userId}`);
            setBooking(bookingData);
            //console.log("Loggedin", bookingData)
        } catch (error) {
            console.error('Error fetching movies: ', error);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, [userId]);


    return (
        < >
            <Container className='col-12 col-lg-5 mt-2'>
                <Row className="custom-background rounded-top-4 p-2 mx-1 flex justify-content-center" >
                    <Col className='p-0 my-3 mx-1 flex justify-content-center'>
                        <ActiveBookingDetail userBooking={booking.filter(book => new Date(book.screeningDate) >= new Date())} />
                    </Col>
                </Row>
                <Row className="custom-background rounded-bottom-4 p-2 mx-1 flex justify-content-center" >
                    <Col className='p-0'>
                        <InActiveBookingDetail userBooking={booking.filter(book => new Date(book.screeningDate) < new Date())} />
                    </Col>
                </Row>
            </Container>
        </ >
    );
}

export default LoggedInView;