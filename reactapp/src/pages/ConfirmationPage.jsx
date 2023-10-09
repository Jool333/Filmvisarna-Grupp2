import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const BookingView = () => {
  const customStyle1 = {
    backgroundColor: 'rgb(205, 185, 145)',
    border: '1px solid #ccc',
    padding: '20px',
    marginBottom: '10px',
    height: '100px',
    width: '100%',
    borderRadius: '6px',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'left',
    textAlign: 'left',
  };

  const customStyle2 = {
    backgroundColor: 'rgb(205, 185, 145)',
    border: '1px solid #ccc',
    padding: '20px',
    marginBottom: '10px',
    height: '200px',
    width: '100%',
    borderRadius: '6px',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const imagessource = "src\\images\\";

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '450px',
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
    <Container className="mt-5">
      <div className='text-center'>
        <h1>
          Bokningsbekräftelse
          <hr>
          </hr>
        </h1>
      </div>
      <Row>
        <Col md={6}>
          <img src={imagessource + "deostyriga.jpeg"} alt="Bokningsbild" style={imageStyle} />
        </Col>
        <Col style={{ paddingTop: '' }} md={6}>
          <div className="guestbooking-page d-flex align-items-left">
            <h2>
              De Ostyriga
            </h2>
          </div>
          <div style= {{paddingTop:'10%'}}>
          <div className="guestbooking-page d-flex align-items-left">
            <h4>
              Beställning
            </h4>
          </div>
          <div className="custom-card" style={customStyle1}>
            <p style={textStyle}>
              
              <FontAwesomeIcon icon={faCircle} style={iconStyle} />
              2 st Ordinarie biljetter<br />
              <FontAwesomeIcon icon={faCircle} style={iconStyle} />
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
              Längd: 135 min<br />
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
