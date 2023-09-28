// SeatsGrid.js
import React, { useState } from 'react';
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

  const handleSeatsClick = (row, seat) => {
    const isSeatSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.row === row && selectedSeat.seat === seat
    );

    if (selectedSeats.length < selectedTickets.normal + selectedTickets.pensionär + selectedTickets.barn) {
      // Användaren har inte valt tillräckligt många platser än, så de kan fortsätta välja och byta platser
      if (isSeatSelected) {
        // Om stolen redan är vald, ta bort den från listan
        setSelectedSeats(selectedSeats.filter((selectedSeat) => !(selectedSeat.row === row && selectedSeat.seat === seat)));
      } else {
        // Om stolen inte är vald, lägg till den i listan
        setSelectedSeats([...selectedSeats, { row, seat }]);
      }
    } else if (isSeatSelected) {
      // Användaren har valt tillräckligt många platser men kan fortfarande avvälja platser
      setSelectedSeats(selectedSeats.filter((selectedSeat) => !(selectedSeat.row === row && selectedSeat.seat === seat)));
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <TicketBooking
            selectedSeats={selectedSeats}
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
            setSelectedSeats={setSelectedSeats}
          />
        </Col>
        <Col md={6} xs={12}>
          <div>
            <h5 className='justify-content'>Välj Stolar ({selectedSeats.length} valda)</h5>
            <div
              className='film-screen'
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
            <div className='chairs-container'>
              {seatsPerRow.map((seats, i) => (
                <Row key={i}>
                  <Col className='text-center'>
                    {new Array(seats).fill(1).map((x, j) => (
                      <div className='d-inline-block' key={j}>
                        <Button
                          variant='light'
                          size='sm'
                          className='chair-button'
                          style={{
                            backgroundColor: selectedSeats.some(
                              (seat) => seat.row === i && seat.seat === j
                            )
                              ? 'green'
                              : 'black',
                            color: 'white',
                            border: 'none',
                            transform: 'rotate(180deg)',
                            padding: '0',
                            width: '1.5rem',
                            height: '1.5rem',
                          }}
                          onClick={() => handleSeatsClick(i, j)}
                          disabled={
                            selectedTickets.normal + selectedTickets.pensionär + selectedTickets.barn === 0
                          }
                        >
                          <FontAwesomeIcon icon={faCouch} style={{ fontSize: '1.1rem' }} />
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
    </Container>
  );
}

export default SeatsGrid;
