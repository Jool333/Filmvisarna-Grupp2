// TicketBooking.js
import React from 'react';
import { Col, Button } from 'react-bootstrap';

function TicketBooking({ selectedSeats, selectedTickets, setSelectedTickets, setSelectedSeats }) {
  const maxTotalTickets = 81;

  const getTotalTickets = () => {
    return selectedTickets.normal + selectedTickets.pensionär + selectedTickets.barn;
  };

  const handleTicketChange = (type, quantity) => {
    const totalTickets = getTotalTickets();

    if (totalTickets + quantity <= maxTotalTickets) {
      const updatedTickets = { ...selectedTickets };
      updatedTickets[type] = quantity;
      setSelectedTickets(updatedTickets);
    }
  };

  const handleTicketDecrease = (type) => {
    if (selectedTickets[type] > 0) {
      handleTicketChange(type, selectedTickets[type] - 1);
      setSelectedSeats([]);
    }
  };

  const calculateTotalPrice = () => {
    const normalPrice = selectedTickets.normal * 140;
    const pensionärPrice = selectedTickets.pensionär * 120;
    const barnPrice = selectedTickets.barn * 80;

    return normalPrice + pensionärPrice + barnPrice;
  };

  return (
    <Col xs={12} md={6}>
      <div className='ticket-booking'>
        <div>
          <h5>Välj biljetter</h5>
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4 style={{ fontSize: '10px', flex: '1' }}>Normal - 140 kr</h4>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button
                  variant='light'
                  onClick={() => handleTicketDecrease('normal')}
                  disabled={selectedTickets.normal === 0}
                >
                  -
                </Button>
                <span style={{ margin: '0 10px' }}>{selectedTickets.normal}</span>
                <Button variant='light' onClick={() => handleTicketChange('normal', selectedTickets.normal + 1)}>+</Button>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4 style={{ fontSize: '10px', flex: '1' }}>Pensionär - 120 kr</h4>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button
                  variant='light'
                  onClick={() => handleTicketDecrease('pensionär')}
                  disabled={selectedTickets.pensionär === 0}
                >
                  -
                </Button>
                <span style={{ margin: '0 10px' }}>{selectedTickets.pensionär}</span>
                <Button variant='light' onClick={() => handleTicketChange('pensionär', selectedTickets.pensionär + 1)}>+</Button>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4 style={{ fontSize: '10px', flex: '1' }}>Barn - 80 kr</h4>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button
                  variant='light'
                  onClick={() => handleTicketDecrease('barn')}
                  disabled={selectedTickets.barn === 0}
                >
                  -
                </Button>
                <span style={{ margin: '0 10px' }}>{selectedTickets.barn}</span>
                <Button variant='light' onClick={() => handleTicketChange('barn', selectedTickets.barn + 1)}>+</Button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h6>Totalt pris: {calculateTotalPrice()} kr</h6>
      </div>
    </Col>
  );
}

export default TicketBooking;
