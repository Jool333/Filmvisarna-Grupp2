import React from 'react';

function ReservationNumber({ seat }) {
  return (
    <div className="reservation-number">
      {`Seat ${seat.row}-${seat.seat}: ${seat.reservationNumber}`}
    </div>
  );
}

export default ReservationNumber;

// Funktion för att skapa slumpmässiga reservationsnummer
export const generateReservationNumber = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const reservationLength = 6; 
  let reservationNumber = '';

  for (let i = 0; i < reservationLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    reservationNumber += characters[randomIndex];
  }

  return reservationNumber;
};