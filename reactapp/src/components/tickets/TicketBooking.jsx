import React from 'react';
import { Button } from 'react-bootstrap';

function TicketBooking({ selectedSeats }) {
  const [ticketTypes, setTicketTypes] = React.useState([
    { type: 'normal', quantity: 0, price: 140 },
    { type: 'pensionär', quantity: 0, price: 120 },
    { type: 'barn', quantity: 0, price: 80 },
  ]);

  const handleQuantityChange = (type, quantity) => {
    const updatedTicketTypes = [...ticketTypes];
    const index = updatedTicketTypes.findIndex((ticket) => ticket.type === type);

    if (quantity >= 0 && quantity <= selectedSeats) {
      updatedTicketTypes[index].quantity = quantity;
      setTicketTypes(updatedTicketTypes);
    }
  };

  const calculateTotalPrice = () => {
    return ticketTypes.reduce((total, ticket) => {
      return total + ticket.quantity * ticket.price;
    }, 0);
  };

  return (
    <div>
      {ticketTypes.map((ticket) => (
        <div key={ticket.type}>
          <h4 style={{ marginTop: '10%' }}>
            {ticket.type.charAt(0).toUpperCase() + ticket.type.slice(1)} - {ticket.price} kr
          </h4>
          <Button
            variant="light"
            onClick={() => handleQuantityChange(ticket.type, ticket.quantity - 1)}
            disabled={ticket.quantity === 0}
          >
            -
          </Button>
          <span style={{ margin: '0 10px' }}>{ticket.quantity}</span>
          <Button
            variant="light"
            onClick={() => handleQuantityChange(ticket.type, ticket.quantity + 1)}
            disabled={ticket.quantity === selectedSeats}
          >
            +
          </Button>
          <h2 style={{ borderBottom: '1px solid white', paddingBottom: '10px' }}></h2>
        </div>
      ))}
      <h6>Totalt pris: {calculateTotalPrice()} kr</h6>
    </div>
  );
}

export default TicketBooking;
