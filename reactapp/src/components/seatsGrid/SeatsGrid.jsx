// SeatsGrid.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import TicketBooking from '../tickets/TicketBooking';

function SeatsGrid({ screening }) {

  const theaterId = screening.theaterId;

  const [seatsPerRow, setSeatsPerRow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/seats');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        let data = await response.json();

        // filter seats
        data = data.filter(x => x.theaterId === theaterId);

        // make array with the seats in rows (array of arrays)
        let inRows = [], currentRowNbr, currentRow;
        for (let seat of data) {
          if (currentRowNbr !== seat.rowNbr) {
            currentRowNbr = seat.rowNbr;
            currentRow = [];
            inRows.push(currentRow);
          }
          currentRow.push(seat);
        }
        setSeatsPerRow(inRows);
      } catch (error) {
        console.error('Error fetching seats:', error);
      }
    };

    fetchData();
  }, []);


  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState({
    normal: 0,
    pensionär: 0,
    barn: 0,
  });
  const [canContinue, setCanContinue] = useState(false);
  const [isThereTickets, setIsThereTickets] = useState(false);

  useEffect(() => {
    const hasSelectedTickets = selectedTickets.normal > 0 || selectedTickets.pensionär > 0 || selectedTickets.barn > 0;
    setIsThereTickets(hasSelectedTickets);
  }, [selectedTickets]);



  useEffect(() => {
    const totalSelectedTickets = selectedTickets.normal + selectedTickets.pensionär + selectedTickets.barn;
    setCanContinue(totalSelectedTickets > 0 && totalSelectedTickets === selectedSeats.length);
  }, [selectedSeats, selectedTickets]);


  const handleSeatsClick = (row, seat, id) => {
    const isSeatSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.row === row && selectedSeat.seat === seat && selectedSeat.id === id
    );

    const maxTicketsSelected =
      selectedTickets.normal + selectedTickets.pensionär + selectedTickets.barn ===
      selectedSeats.length;

    if (!maxTicketsSelected || isSeatSelected) {
      if (isSeatSelected) {
        setSelectedSeats(selectedSeats.filter((selectedSeat) => !(selectedSeat.row === row && selectedSeat.seat === seat && selectedSeat.id === id)));
      } else {
        setSelectedSeats([...selectedSeats, { row, seat, id }]);
      }
    }
    setSelectedTickets(selectedTickets);
  };

  return (
    <Container className='text-light'>
      <Row className='d-flex justify-content-center'>
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
            <h4 className='d-flex align-items-center justify-content-center mb-3'>Välj Stolar ({selectedSeats.length} valda)</h4>
            <div
              className='film-screen mb-5 bg-secondary text-center rounded'
            >
              <p className='text-light' >Bioduk</p>
            </div>
            <div className='chairs-container mt-10'>

              {seatsPerRow.map((seats, i) => (
                <Row key={i}>
                  <Col className='d-flex align-items-center justify-content-center p-0'>
                    {seats.map((x) => (
                      <div className='d-inline-block' key={x.seatNbr}>
                        <Button
                          variant='black'
                          size='sm'
                          className={`chair-button border-0 p-0 ${selectedSeats.some(
                            (seat) => seat.row === x.rowNbr && seat.seat === x.seatNbr
                          )
                            ? 'text-warning'
                            : ''
                            }`}
                          onClick={() => handleSeatsClick(x.rowNbr, x.seatNbr, x.id)}
                          disabled={!isThereTickets}
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
    </Container>
  );
}

export default SeatsGrid;
