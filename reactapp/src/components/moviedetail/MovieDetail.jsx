import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MovieDetail() {
  const firstAndLastColStyle = {
    backgroundColor: '#CDB991',
    height: '300px',
    color: 'black',
  };

  const middleColStyle = {
    backgroundColor: '#CDB991',
    height: '300px',
    color: 'black',
    fontSize: '12px',
  };

  const weekdayBoxStyle = {
    
    width: '50px',
    fontSize: '11px',
  };

  const dateBoxStyle = {
    marginTop: '10px',
  };

  const timeStyle = {
    cursor: 'pointer',
    margin: '5px',
    backgroundColor: 'black',
    borderRadius: '6px',
    borderColor: 'black',
    border: '2px solid black', 
    padding: '10px', 
    color: '#CDB991', 
    width: '50px'
  };

  const generateDatesForWeek = () => {
    const today = new Date();
    const days = [];

    today.setDate(today.getDate() - (today.getDay() - 1));

    for (let i = 0; i < 3; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      const options = { weekday: 'short', month: 'long', day: 'numeric', locale: 'sv-SE' };
      days.push(date.toLocaleDateString('sv-SE', options));
    }

    return days;
  };

  const generateFixedShowtimes = () => {
    const showtimes = {};

    const times = {
      '18:00': ['18:00', '19:15', '20:00'],
      '20:00': ['20:00', '21:15'],
    };

    for (const date of datesForWeek) {
      if (date.includes('söndag')) {
        showtimes[date] = times['20:00'];
      } else {
        showtimes[date] = times['18:00'];
      }
    }

    return showtimes;
  };

  const datesForWeek = generateDatesForWeek();
  const showtimes = generateFixedShowtimes();

  const handleTimeClick = (date, time) => {
    console.log(`Tid klickad: ${date}, ${time}`);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={3} style={firstAndLastColStyle}>
          Detaljer
        </Col>
        <Col xs={12} md={6} style={middleColStyle}>
          <Row className="flex">
            {datesForWeek.map((date, index) => (
              <Col key={index} className="text-center">
                <div style={weekdayBoxStyle}>{date.split(',')[0]}</div>
                <div style={dateBoxStyle}>{date.split(',')[1]}</div>
                {showtimes[date].map((time, timeIndex) => (
                  <div
                    key={timeIndex}
                    style={timeStyle} // Använd den uppdaterade stilen här
                    onClick={() => handleTimeClick(date, time)}
                  >
                    {time}
                  </div>
                ))}
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} md={3} style={firstAndLastColStyle}>
          Beskrivning
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetail;
