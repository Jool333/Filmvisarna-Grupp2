import React, { useEffect, useState } from 'react';
import { Container, Col, Button, Form } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';

function TicketBooking({ selectedSeats, selectedTickets, setSelectedTickets, setSelectedSeats }) {
  const maxTotalTickets = 81;

  const user = useOutletContext().user;

  const [formData, setFormData] = useState({
    email: ''
  });
  const [IsGuest, setIsGuest] = useState(true);

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const isEmailValid = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-ZÅÄÖ]{2,4}$/;
    return emailPattern.test(formData.email);
  };


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

  useEffect(() => {
    const isNotLoggedIn = (user == 0 ^ user == null)
    setIsGuest(isNotLoggedIn);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const calculateTotalPrice = () => {
    const normalPrice = selectedTickets.normal * 140;
    const pensionärPrice = selectedTickets.pensionär * 120;
    const barnPrice = selectedTickets.barn * 80;

    return normalPrice + pensionärPrice + barnPrice;
  };

  const ticketTypes = [
    {
      id: 1,
      name: "normal",
      price: 140
    },
    {
      id: 2,
      name: "pensionär",
      price: 120
    },
    {
      id: 3,
      name: "barn",
      price: 80
    }
  ]
  const capitalizeString = (str) => {
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <Col xs={12} md={6}>
      <div>
        <h4>Välj biljetter</h4>
        {ticketTypes.map(ticket => {
          return (
            <div key={ticket.id} className='d-flex align-items-center py-2'>
              <h4 style={{ fontSize: '0.9rem', flex: '1' }}>{capitalizeString(ticket.name)} - {ticket.price} kr</h4>

              <div className='d-flex align-items-center' >
                <Button variant='light'
                  onClick={() => handleTicketDecrease(ticket.name)}
                  disabled={selectedTickets[ticket.name] === 0}
                >
                  -
                </Button>
                <span className='mx-2'>{selectedTickets[ticket.name]}</span>
                <Button variant='light'
                  onClick={() => handleTicketChange(ticket.name, selectedTickets[ticket.name] + 1)}
                >
                  +
                </Button>
              </div>
            </div >
          )
        })}

      </div>
      <hr />
      <h6 className='mb-2'>Totalt pris: {calculateTotalPrice()} kr</h6>
      <div className='my-4' xs={12} md={6} lg={4} >
        {IsGuest ? (
          <Form onSubmit={handleSubmit} className='w-5rem'>
            <Form.Group className="mb-3">
              <Form.Label className="text-light">E-mail:</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleEmailChange}
                required
              />
            </Form.Group>
          </Form>
        ) : (<></>)}
        <Button
          variant="outline-warning"
          type="submit"

          onClick={handleContinueClick}
          disabled={
            !isEmailValid() ||
            selectedSeats.length === 0 ||
            getTotalTickets() !== selectedSeats.length
          }
        >
          Fortsätt
        </Button>
      </div>
    </Col >
  );
}


export default TicketBooking;
