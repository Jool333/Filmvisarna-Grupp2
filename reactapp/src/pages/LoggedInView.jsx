import React, { useEffect, useState } from 'react'

import { Container, Row } from 'react-bootstrap';
import ActiveBookingDetail from '../components/BookingDetail/ActiveBookingDetail'
import InActiveBookingDetail from '../components/BookingDetail/InActiveBookingDetail';
import { get } from '../ApiConnection.jsx';




function LoggedInView() {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        (async () => {
            try {

                //Jag vill dubbelkolla om du vill hämta alla data för bookningar i loggedinView och sedan filter de aktiva och de tidigare bookningar och skicka dessa data till deras komponetenr
                // Hur kan vi får UserId här om inloggning inte funkar än som ska?

                const bookingsData = await get(`bookings/${UserId}/`);

                console.log(bookingsData)
                setBookings(bookingsData)
            } catch (error) {
                console.error('Error fetching movies: ', error);
            }
        })();
    }, []);

    return (

        <Container className="container-loggedInView custom-background p-3 rounded-5">
            <Row className="mt-1 mx-1" >
                <ActiveBookingDetail />
            </Row>
            <Row className="my-3 mx-1">
                <InActiveBookingDetail />
            </Row>

        </Container >
    );
}

export default LoggedInView;