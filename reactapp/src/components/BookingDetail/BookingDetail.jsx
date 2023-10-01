import React from 'react'
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap';
import postar from '@/images/poster.jpg'



function BookingDetail() {
    return (

        <Container className="mt-5"  style={{background:'black'}}>
            <Row>


                <div >

                    <img src={postar} height="100" />


                    <div>
                        <h2>
                            De Ostyriga
                        </h2>
                        <h3>
                            Filmvisarna Malmö, salong 3
                        </h3>
                        <h3>
                            Imorgon,Fredag , 23:00 </h3>
                        <h2>
                            estse stestestsefdsfg
                        </h2>
                        <h3>
                            Ordinari Beljtter
                        </h3>
                        <h3>
                            Bookningsnr:
                        </h3>
                    </div>

                    <button> Avboka </button>
                </div>

            </Row>

        </Container>
    );
}

export default BookingDetail;