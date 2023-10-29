import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import TicketBooking from '../tickets/TicketBooking';
import { get } from '../../ApiConnection';

function SeatsGrid({ screening }) {

  const [seatsPerRow, setSeatsPerRow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const seats = await get('/seats/screening/' + screening.id);
        setSeatsPerRow(seats)
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


  const handleSeatsClick = (seat) => {
    const isSeatSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.seat === seat
    );

    const maxTicketsSelected =
      selectedTickets.normal + selectedTickets.pensionär + selectedTickets.barn ===
      selectedSeats.length;

    if (!maxTicketsSelected || isSeatSelected) {
      if (isSeatSelected) {
        setSelectedSeats(selectedSeats.filter((selectedSeat) => !(selectedSeat.seat === seat)));
      } else {
        setSelectedSeats([...selectedSeats, { seat }]);
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

              {seatsPerRow.map((seats, row) => (
                <Row key={row}>
                  <Col className='d-flex align-items-center justify-content-center p-0'>
                    {seats.map((seat) => (
                      < div className='d-inline-block' key={seat.id} >
                        <Button
                          variant='transparent'
                          size='sm'
                          className={`chair-button border-0 p-0 ${seat.isTaken && 'text-danger'} 
                          ${selectedSeats.some(selectedSeat => selectedSeat.row === seat.rowNbr && selectedSeat.seat === seat.id) && 'text-warning'}`}
                          onClick={() => handleSeatsClick(seat.id)}
                          disabled={!isThereTickets || seat.isTaken}
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
    </Container >
  );
}

export default SeatsGrid;