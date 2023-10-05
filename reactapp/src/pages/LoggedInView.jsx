import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import BookingDetail from '../components/BookingDetail/BookingDetail'




function BookningViewPage() {
    return (

        <Container className="mt-5 container-loggedInView">
            <Row  >

                <div  >
                    <h2> Aktiva Bokningar</h2>

                    <BookingDetail />
                </div>

             

            </Row>
            <Row>

                <div>
                    <h2> Tidigare Bokningar</h2>

                    <BookingDetail />

                    <BookingDetail />
                </div>

            </Row>

        </Container >
    );
}

export default BookningViewPage;