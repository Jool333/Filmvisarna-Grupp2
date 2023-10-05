import React from 'react'
import { Container, Row } from 'react-bootstrap';
import poster from '@/images/poster.jpg'



function BookingDetail() {
    return (

        <Container className="mt-4 , bookingDetail-loggedInView"  >
            <Row>
                <div className='bookingDetail-loggedInView-container'>
                    <img  className='bookingDetail-loggedInView-container-img'
                     src={poster} height="100" />
                    <div className='bookingDetail-loggedInView-container-text-container'>
                        <h2>
                            De Ostyriga
                        </h2>
                        <h3>
                            Filmvisarna Malmö, salong
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