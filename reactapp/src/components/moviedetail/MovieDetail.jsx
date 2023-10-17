
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function MovieDetail({ chosenMovie }) {
  const [movie, setMovie] = useState('');

  const fetchData = async () => {
    try {
      const movieData = await chosenMovie;
      setMovie(movieData);
    } catch (error) {
      console.error('Error fetching movies: ', error);
    }
  };

  useEffect(() => {
    if (chosenMovie)
      fetchData();
  }, [chosenMovie]);

  const firstAndLastColStyle = {
    height: '15rem',
    color: 'black',
    borderRadius: '10px',
    marginBottom: '0.3rem',
    marginTop: '0.3rem',
    minheight: "15rem"
  };

  const middleColStyle = {
    color: 'black',
    fontSize: '12px',
    borderRadius: '10px',
    marginTop: '0.3rem',
    marginBottom: '0.3rem',


  };

  const timeStyle = {
    cursor: 'pointer',
    margin: '0.5rem',
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

    today.setDate(today.getDate());

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      const options = { weekday: 'short', month: 'short', day: 'numeric', locale: 'sv-SE' };
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
    <Container className='mt-1'>
      <Row style={{ marginTop: '3%', marginBottom: '3%', }} className="d-flex justify-content-between">
        <Col className='p-3 custom-background' xs={12} md={2} style={firstAndLastColStyle}>
          <div>{movie.title}</div>
          <div style={{ marginTop: '40px' }}>Speltid: 2 timmar 30 min</div>
          <div style={{ marginTop: '40px' }}>Kategori: Action</div>
        </Col>
        <Col xs={12} md={7} style={middleColStyle} className='custom-background'>
          <Row className="flex p-3">
            {datesForWeek.map((date, index) => (
              <Col key={index} className=' flex p-1'>
                <div className='w-100 text-center' >{date.split(',')[0]}</div>
                <div>{date.split(',')[1]}</div>
                {showtimes[date].map((time, timeIndex) => (
                  <Button
                    className='timebutton px-1'
                    key={timeIndex}
                    style={timeStyle}
                    onClick={() => handleTimeClick(date, time)}
                    href={'/booking'}
                  >
                    {time}
                  </Button>
                ))}
              </Col>
            ))}
          </Row>
        </Col>
        <Col className='p-3 custom-background' xs={12} md={2} style={firstAndLastColStyle}>
          <div>
            {movie.description}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetail;

/*
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MovieDetail() {
  const firstAndLastColStyle = {
    backgroundColor: '#CDB991',
    height: '300px',
    color: 'black',
    borderRadius: '10px',
  };

  const middleColStyle = {
    backgroundColor: '#CDB991',
    height: '300px',
    color: 'black',
    fontSize: '12px',
    borderRadius: '10px',
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
    width: '50px',
  };

  const [datesForWeek, setDatesForWeek] = useState([]);
  const [showtimes, setShowtimes] = useState({});

  useEffect(() => {
    // Skapa datumobjekt för dagens datum och tre dagar framåt
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 4; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      dates.push(date);
    }

    // Spara datumen i state
    setDatesForWeek(dates);

    // Skapa showtimes-data (här kan du anpassa detta efter ditt behov)
    const showtimesData = {};
    const times = {
      '18:00': ['18:00', '19:15', '20:00'],
      '20:00': ['20:00', '21:15'],
    };

    for (const date of dates) {
      const options = { weekday: 'short', month: 'long', day: 'numeric', locale: 'sv-SE' };
      const formattedDate = date.toLocaleDateString('sv-SE', options);

      if (formattedDate.includes('söndag')) {
        showtimesData[formattedDate] = times['20:00'];
      } else {
        showtimesData[formattedDate] = times['18:00'];
      }
    }

    // Spara showtimes-data i state
    setShowtimes(showtimesData);
  }, []);

  const handleTimeClick = (date, time) => {
    console.log(`Tid klickad: ${date}, ${time}`);
    // Implementera din logik för när en tid klickas här
  };

  return (
    <Container>
      <Row style={{ marginTop: '5%', marginBottom: '5%' }} className="d-flex justify-content-between">
        <Col xs={12} md={2} style={firstAndLastColStyle}>
          <div>Transformers</div>
          <div style={{ marginTop: '40px' }}>Speltid: 2 timmar 30 min</div>
          <div style={{ marginTop: '40px' }}>Kategori: Action</div>
        </Col>
        <Col xs={12} md={6} style={middleColStyle}>
          <Row className="flex">
            {datesForWeek.map((date, index) => (
              <Col key={index} className="text-center">
                <div style={weekdayBoxStyle}>{date.toLocaleDateString('sv-SE', { weekday: 'short' })}</div>
                <div style={dateBoxStyle}>{date.toLocaleDateString('sv-SE', { month: 'long', day: 'numeric' })}</div>
                {showtimes[date.toLocaleDateString('sv-SE', { weekday: 'short', month: 'long', day: 'numeric' })].map((time, timeIndex) => (
                  <div
                    key={timeIndex}
                    style={timeStyle}
                    onClick={() => handleTimeClick(date, time)}
                  >
                    {time}
                  </div>
                ))}
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} md={2} style={firstAndLastColStyle}>
          <div>Transformers består av de heroiska Autobots, som leds av Optimus Prime och Bumblebee, och de onda Decepticons.
           De kommer från planeten Cybertron och leds av den onde Megatron.
           </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetail;

*/