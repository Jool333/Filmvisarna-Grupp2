import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';

function SeatsGrid() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState({
    normal: 0,
    pensionär: 0,
    barn: 0,
  });

  const seatsPerRow = [
    8,
    9,
    10,
    10,
    10,
    10,
    12,
    12
  ];

  const handleSeatsClick = (row, seat) => {
    if (selectedSeats.length < selectedTickets.normal + selectedTickets.pensionär + selectedTickets.barn) {
      // Hantera stolsval endast om användaren har valt biljetter men inte tillräckligt med stolar än
      setSelectedSeats([...selectedSeats, { row, seat }]);
    }
  };

  const handleTicketChange = (type, quantity) => {
    const updatedTickets = { ...selectedTickets };
    updatedTickets[type] = quantity;
    setSelectedTickets(updatedTickets);
    setSelectedSeats([]);
  };

  const calculateTotalPrice = () => {
    const normalPrice = selectedTickets.normal * 140;
    const pensionärPrice = selectedTickets.pensionär * 120;
    const barnPrice = selectedTickets.barn * 80;

    return normalPrice + pensionärPrice + barnPrice;
  };

  return (
    <Container>
      <Row className='justify-content-md-between'>
        <Col md={3} xs={12}>
          <div className="ticket-booking">
            <div>
              <h5>Välj biljetter</h5>
              <div>
                <h4>Normal - 140 kr</h4>
                <Button
                  variant="light"
                  onClick={() => handleTicketChange('normal', selectedTickets.normal - 1)}
                  disabled={selectedTickets.normal === 0}
                >
                  -
                </Button>
                <span style={{ margin: '0 10px' }}>{selectedTickets.normal}</span>
                <Button
                  variant="light"
                  onClick={() => handleTicketChange('normal', selectedTickets.normal + 1)}
                  disabled={selectedSeats.length > 0}
                >
                  +
                </Button>
              </div>
              <hr /> 
              <div>
                <h4>Pensionär - 120 kr</h4>
                <Button
                  variant="light"
                  onClick={() => handleTicketChange('pensionär', selectedTickets.pensionär - 1)}
                  disabled={selectedTickets.pensionär === 0}
                >
                  -
                </Button>
                <span style={{ margin: '0 10px' }}>{selectedTickets.pensionär}</span>
                <Button
                  variant="light"
                  onClick={() => handleTicketChange('pensionär', selectedTickets.pensionär + 1)}
                  disabled={selectedSeats.length > 0}
                >
                  +
                </Button>
              </div>
              <hr /> 
              <div>
                <h4>Barn - 80 kr</h4>
                <Button
                  variant="light"
                  onClick={() => handleTicketChange('barn', selectedTickets.barn - 1)}
                  disabled={selectedTickets.barn === 0}
                >
                  -
                </Button>
                <span style={{ margin: '0 10px' }}>{selectedTickets.barn}</span>
                <Button
                  variant="light"
                  onClick={() => handleTicketChange('barn', selectedTickets.barn + 1)}
                  disabled={selectedSeats.length > 0}
                >
                  +
                </Button>
              </div>
            </div>
            <hr /> 
            <h6>Totalt pris: {calculateTotalPrice()} kr</h6> {/* Visa totalpriset här */}
          </div>
        </Col>
        <Col xs={12} md={9}>
          <h5 className='justify-content'>Välj Stolar ({selectedSeats.length} valda)</h5>
          <div
            className="film-screen"
            style={{
              marginBottom: '10%',
              maxWidth: '50%',
              marginLeft: '25%',
              maxHeight: '3px',
              alignContent: 'center',
              backgroundColor: 'gray',
              textAlign: 'center',
              borderRadius: '3px',
            }}
          >
            <p style={{ color: 'white', fontSize: '15px' }}>Bioduk</p>
          </div>
          <div className="chairs-container">
            {seatsPerRow.map((seats, i) => (
              <Row key={i}>
                <Col className="text-center">
                  {new Array(seats).fill(1).map((x, j) => (
                    <div className="d-inline-block" key={j}>
                      <Button
                        variant="light"
                        size="sm"
                        className="chair-button"
                        style={{
                          backgroundColor: selectedSeats.some(seat => seat.row === i && seat.seat === j) ? 'green' : 'black',
                          color: 'white',
                          border: 'none',
                          transform: 'rotate(180deg)',
                        }}
                        onClick={() => handleSeatsClick(i, j)}
                        disabled={selectedSeats.length >= selectedTickets.normal + selectedTickets.pensionär + selectedTickets.barn || selectedTickets.normal + selectedTickets.pensionär + selectedTickets.barn === 0}
                      >
                        <FontAwesomeIcon
                          icon={faCouch}
                          style={{ fontSize: '1rem' }}
                        />
                      </Button>
                    </div>
                  ))}
                </Col>
              </Row>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SeatsGrid;
