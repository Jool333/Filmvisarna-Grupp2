import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const BookingView = () => {
  const customStyle1 = {
    backgroundColor: 'rgb(205, 185, 145)',
    border: '1px solid #ccc',
    paddingTop: '15px',
    marginBottom: '10px',
    borderRadius: '6px',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const customStyle2 = {
    backgroundColor: 'rgb(205, 185, 145)',
    border: '1px solid #ccc',
    paddingTop: '15px',
    marginBottom: '10px',
    borderRadius: '6px',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const imagessource = "src/images/";

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '25rem', 
    paddingTop: '10%',
  };

  const textStyle = {
    fontSize: '14px',
  };

  const iconStyle = {
    fontSize: '12px',
    marginRight: '5px',
  };

  return (

    <Container className="mt-1">
      <div className='text-center pt-3 pb-2'>
        <h1>
          Bokningsbekräftelse
        <hr/>
        </h1>
      </div>
      <Row>
        <Col xs={12} md={5} className='d-flex align-items-center justify-content-center'>
          <img src={imagessource + "deostyriga.jpeg"} alt="Bokningsbild" style={imageStyle} />
        </Col>
        <Col xs={12} md={5}>
          <div className="guestbooking-page d-flex align-items-center justify-content-center">
            <h3>
              De Ostyriga
            </h3>
          </div>
          <div style={{ paddingTop: '10%' }}>
            <div className="guestbooking-page d-flex align-items-center justify-content-center">
              <h4>
                Beställning
              </h4>
            </div>
            <div className="custom-card" style={customStyle1}>
              <p style={textStyle}>
                <h3>Bokningsnummer: CR2LWF</h3>   
                2 st Normala biljetter<br />
                120 kr/st<br />
                Totalt att betala: 240 kr
              </p>
            </div>
            <div className="custom-card" style={customStyle2}>
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
