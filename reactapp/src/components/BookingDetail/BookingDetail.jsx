import React from 'react'
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap';
import postar from '@/images/poster.jpg'



function BookingDetail() {
    return (

        <Container className="mt-4 , bookingDetail-loggedInView"  >
            <Row>


                <div className='bookingDetail-loggedInView-container'>

                    <img  className='bookingDetail-loggedInView-container-img'
                     src={postar} height="100" />


                    <div className='bookingDetail-loggedInView-container-text-container'>
                        <h4>
                            De Ostyriga
                        </h4>
                        <h5>
                            Filmvisarna Malmö, salong
                        </h5>
                        <h5>
                            Imorgon,Fredag , 23:00 </h5>
                    
                        <h6>
                            Ordinari Biljtter
                        </h6>
                        <h6>
                            Bookningsnr:
                        </h6>
                    </div>

                    <button> Avboka </button>
                </div>

            </Row>

        </Container>
    );
}

export default BookingDetail;