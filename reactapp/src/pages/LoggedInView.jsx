import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ActiveBookingDetail from '../components/BookingDetail/ActiveBookingDetail'
import InActiveBookingDetail from '../components/BookingDetail/InActiveBookingDetail';




function LoggedInView() {
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