import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const BookingView = () => {
  // gör till css class
  const customStyle1 = {
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const imagessource = "src/images/";
  //gör till css class
  const imageStyle = {
    maxHeight: '20rem'
  };

  const textStyle = {
    fontSize: '14px',
  };

  return (

    <Container className="mt-1">
      <div className='text-center pt-3 pb-2'>
        <h1 className='text-light'>
          Bokningsbekräftelse
          <hr />
        </h1>
      </div>
      <Row>
        <Col xs={12} md={5} className='d-flex align-items-center justify-content-center'>
          <img src={imagessource + "deostyriga.jpeg"} alt="Bokningsbild" style={imageStyle} className='mw-100 mb-3' />
        </Col>
        <Col xs={12} md={5}>
          <div className="guestbooking-page d-flex align-items-center justify-content-center text-light">
            <h2>
              De Ostyriga
            </h2>
          </div>
          <div className='pt-3' >
            <div className="guestbooking-page d-flex align-items-center justify-content-center text-light">
              <h4>
                Beställning
              </h4>
            </div>
            <div className="custom-card custom-background pt-2 mb-3" style={customStyle1}>
              <p style={textStyle}>
                <h3>Bokningsnummer: CR2LWF</h3>
                <hr></hr>
                2 st Normala biljetter<br />
                120 kr/st<br />
                Totalt att betala: 240 kr
              </p>
            </div>
            <div className="custom-card custom-background pt-2 mb-3" style={customStyle1}>
              <p style={textStyle}>
                Originaltitel: Ustyrlig<br />
                Land: Danmark<br />
                Produktionsår: 2022<br />
                Premiär: 15 sept 2023<br />
                Längd: 2h 15min<br />
                Genre: Drama<br />
                Distributör: Folkets Bio<br />
                Språk: Danska<br />
                Textning: Svenska
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingView;
