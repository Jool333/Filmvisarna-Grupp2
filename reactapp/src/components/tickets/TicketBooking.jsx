import React, { useEffect, useState } from 'react';
import { Col, Button, Form } from 'react-bootstrap';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';
import { get, post } from '../../ApiConnection';

function TicketBooking({ selectedSeats, selectedTickets, setSelectedTickets, setSelectedSeats }) {
  const navigate = useNavigate();
  const maxTotalTickets = 81;

  const screeningId = useParams().screeningId;

  const user = useOutletContext().user;

  const [formData, setFormData] = useState({
    email: ''
  });

  const [IsGuest, setIsGuest] = useState(null);
  const [ticketTypes, setTicketTypes] = useState([]);

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
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    postBooking(formData.email)
  };

  async function postBooking() {
    if (!formData.email) {
      const userData = await get('users/' + user);
      formData.email = userData.email;
    }
    const ticketIds = [];

    for (const ticketType in selectedTickets) {
      const count = selectedTickets[ticketType];

      for (let i = 0; i < count; i++) {
        const ticketId = await get('tickets/' + ticketType);
        ticketIds.push(ticketId);
      }
    }
    const seats = selectedSeats.map(seat => seat.seat);
    const tickets = ticketIds.map(ticket => ticket.id);

    const combinedList = seats.map((seat, index) => {
      return {
        seatId: seat,
        ticketTypeId: tickets[index]
      };
    });

    const postData = {
      userId: user,
      screeningId: +screeningId,
      email: formData.email,
      bookingXSeats: combinedList
    }

    const res = await post('bookings', postData);

    navigate('/confirmation/' + res.id)

  }

  const calculateTotalPrice = () => {
    const normalPrice = selectedTickets.normal * 140;
    const pensionärPrice = selectedTickets.pensionär * 120;
    const barnPrice = selectedTickets.barn * 80;

    return normalPrice + pensionärPrice + barnPrice;
  };

  useEffect(() => {
    (async () => {
      try {
        const ticketData = await get('tickets');
        setTicketTypes(ticketData)

      } catch (error) {
        console.error("Error loading ticket types:", error);
      }
    })()
  }, []);

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
        {IsGuest ?
          (
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
              <Button
                variant="outline-warning"
                type="submit"
                disabled={
                  !isEmailValid() ||
                  selectedSeats.length === 0 ||
                  getTotalTickets() !== selectedSeats.length
                }
              >
                Slutför bokning
              </Button>
            </Form>
          ) : (
            <Button
              variant="outline-warning"
              type="submit"
              onClick={postBooking}
              disabled={
                selectedSeats.length === 0 ||
                getTotalTickets() !== selectedSeats.length
              }
            >
              Slutför bokning
            </Button>
          )
        }

      </div>
    </Col >
  );
}


export default TicketBooking;
