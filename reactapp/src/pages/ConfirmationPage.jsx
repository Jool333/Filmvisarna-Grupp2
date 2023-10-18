import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const BookingView = () => {

  const imagessource = "src/images/";

  return (

    <Container className="mt-1">
      <div className='text-center pt-3 pb-2'>
        <h1 className='text-light'>
          Bokningsbekräftelse
          <hr />
        </h1>
      </div>
      <Row className='d-flex align-items-center justify-content-center'>
        <Col xs={9} md={7} className='d-flex align-items-center justify-content-center'>
          <img src={imagessource + "deostyriga.jpeg"} alt="Bokningsbild" className='confirm-poster mw-100 mb-3' />
        </Col>
        <Col xs={12} md={5}>
          <div className="d-flex align-items-center justify-content-center text-light">
            <h2>
              De Ostyriga
            </h2>
          </div>
          <div className='pt-3' >
            <div className="d-flex align-items-center justify-content-center text-light">
              <h4>
                Beställning
              </h4>
            </div>
            <div className="custom-card custom-background py-2 mb-3 text-center rounded">
              <h3>Bokningsnummer: CR2LWF</h3>
              <p >
                2 st Normala biljetter<br />
                120 kr/st<br />
                Totalt att betala: 240 kr
              </p>
            </div>
            <div className="custom-background pt-2 mb-3 d-flex align-items-center justify-content-center rounded" >
              <Col>
                <p className='text-end'>
                  Originaltitel:&emsp;<br />
                  Land:&emsp;<br />
                  Produktionsår:&emsp;<br />
                  Premiär:&emsp;<br />
                  Längd:&emsp;<br />
                  Genre:&emsp;<br />
                  Distributör:&emsp;<br />
                  Språk:&emsp;<br />
                  Textning:&emsp;
                </p>
              </Col>
              <Col>
                <p>
                  &emsp;Ustyrlig<br />
                  &emsp;Danmark<br />
                  &emsp;2022<br />
                  &emsp;15 sept 2023<br />
                  &emsp;2h 15min<br />
                  &emsp;Drama<br />
                  &emsp;Folkets Bio<br />
                  &emsp;Danska<br />
                  &emsp;Svenska
                </p>
              </Col>

            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingView;
