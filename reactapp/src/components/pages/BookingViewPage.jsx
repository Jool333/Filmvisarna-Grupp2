import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import BookingDetail from '../BookingDetail/BookingDetail'


function BookningViewPage() {
    return (

        <Container className="mt-5" style={{background:'#CDB991'}}>
            <Row>




                <div>
                    <h2> Aktiva Bokningar</h2>

                </div>


                <BookingDetail />


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