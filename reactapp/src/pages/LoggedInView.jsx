import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import BookingDetail from '../components/BookingDetail/BookingDetail'




function LoggedInView() {
    return (

        <Container className="container-loggedInView">
            <Row className="container-loggedInView-aktiva-bokningar" >

                <div  >
                    <h2> Aktiva Bokningar</h2>

                    <BookingDetail />
                </div>

             

            </Row>
            <Row  className="container-loggedInView-tidigare-bokningar">

                <div>
                    <h2> Tidigare Bokningar</h2>

                    <BookingDetail />

                    <BookingDetail />
                </div>

            </Row>

        </Container >
    );
}

export default LoggedInView;