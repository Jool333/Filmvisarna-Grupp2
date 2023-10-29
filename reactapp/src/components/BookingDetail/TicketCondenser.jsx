import React from 'react'

function TicketCondenser({ booking }) {
  const condensedTickets = booking.tickets.reduce((summary, ticket) => {
    if (summary[ticket.name]) {
      summary[ticket.name]++;
    } else {
      summary[ticket.name] = 1;
    }
    return summary;
  }, {});

  const condensedTicketsArray = Object.entries(condensedTickets);

  return (
    <>
      <h6>Biljetter:</h6>
      {condensedTicketsArray.map(([ticketName, count], index) => (
        <h6 key={index}>{count}st {ticketName}</h6>
      ))}
      <h6>
        Total kostnad: {booking.tickets.reduce((sum, ticket) => sum + ticket.price, 0)} kr
      </h6>

    </>
  );
}
export default TicketCondenser;