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
    <div>
      {condensedTicketsArray.map(([ticketName, count], index) => (
        <div key={index}>{count} {ticketName}</div>
      ))}
    </div>
  );
}
export default TicketCondenser;