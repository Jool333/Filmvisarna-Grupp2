// SeatsGrid.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import TicketBooking from '../tickets/TicketBooking';

function SeatsGrid() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState({
    normal: 0,
    pensionär: 0,
    barn: 0,
  });
  const [canContinue, setCanContinue] = useState(false);

  const seatsPerRow = [
    8,
    9,
    10,
    10,
    10,
    10,
    12,
    12,
  ];

  useEffect(() => {
    const totalSelectedTickets = selectedTickets.normal + selectedTickets.pensionär + selectedTickets.barn;
    setCanContinue(totalSelectedTickets > 0 && totalSelectedTickets === selectedSeats.length);
  }, [selectedSeats, selectedTickets]);

  const handleSeatsClick = (row, seat) => {
    const isSeatSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.row === row && selectedSeat.seat === seat
    );

    const maxTicketsSelected =
      selectedTickets.normal + selectedTickets.pensionär + selectedTickets.barn ===
      selectedSeats.length;

    if (!maxTicketsSelected || isSeatSelected) {
      if (isSeatSelected) {
        setSelectedSeats(selectedSeats.filter((selectedSeat) => !(selectedSeat.row === row && selectedSeat.seat === seat)));
      } else {
        setSelectedSeats([...selectedSeats, { row, seat }]);
      }
    }
    setSelectedTickets(newSelectedTickets);
  };

  return (
    <Container className='text-light'>
      <Row className='d-flex align-items-center justify-content-center'>
        <Col xs={12} md={6}>
          <TicketBooking
            selectedSeats={selectedSeats}
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
            setSelectedSeats={setSelectedSeats}
          />
        </Col>
        <Col md={4} xs={12}>
          <div>
            <h4 className='d-flex align-items-center justify-content-center'>Välj Stolar ({selectedSeats.length} valda)</h4>
            <div
              className='film-screen mb-5'
              style={{
                maxWidth: '80%',
                marginLeft: '10%',
                maxHeight: '3px',
                alignContent: 'center',
                backgroundColor: 'gray',
                textAlign: 'center',
                borderRadius: '3px',
              }}
            >
              <p className='text-light' >Bioduk</p>
            </div>
            {/*generates all the seats*/}
            <div className='chairs-container mt-10'>
              {seatsPerRow.map((seats, i) => (
                <Row key={i}>
                  <Col className='d-flex align-items-center justify-content-center p-0'>
                    {new Array(seats).fill(1).map((x, j) => (
                      <div className='d-inline-block' key={j}>
                        <Button
                          variant='black'
                          size='sm'
                          className={`chair-button border-0 p-0 ${selectedSeats.some(
                            (seat) => seat.row === i && seat.seat === j
                          )
                            ? 'text-warning'
                            : ''
                            }`}
                          onClick={() => handleSeatsClick(i, j)}
                        >
                          <FontAwesomeIcon icon={faCouch} className="couch-font" />
                        </Button>
                      </div>
                    ))}
                  </Col>
                </Row>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>

        </Col>
      </Row>
    </Container>
  );
}

export default SeatsGrid;
