import React, { useState } from 'react';

function ReservationNum() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let reservationNumber = '';
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    reservationNumber += characters.charAt(randomIndex);
  }
  return reservationNumber;
}

function MovieTicketReservation() {
  const [reservationNumber, setReservationNumber] = useState(null);

    const generateNewReservationNumber = () => {
    const newReservationNumber = ReservationNum();
    setReservationNumber(newReservationNumber);
  };

  return (
    <div>
      <h1>Bokning av filmbiljetter</h1>
      {reservationNumber ? (
        <div>
          <p>Ditt bokningsnummer:</p>
          <h2>{reservationNumber}</h2>
        </div>
      ) : (
        <button onClick={generateNewReservationNumber}>Generera reservationsnummer</button>
      )}
    </div>

      
  );
}

export default MovieTicketReservation;
