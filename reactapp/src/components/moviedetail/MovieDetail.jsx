
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { get } from '../../ApiConnection';

function MovieDetail({ chosenMovie }) {

  const navigate = useNavigate();
  const [movie, setMovie] = useState('');
  const [isNarrow, setIsNarrow] = useState(window.innerWidth <= 751);
  const [screenings, setScreenings] = useState([]);

  const fetchData = async () => {
    try {
      const movieData = await chosenMovie;
      setMovie(movieData);
      fetchScreenings();
    } catch (error) {
      console.error('Error fetching movies: ', error);
    }
  };

  useEffect(() => {
    if (chosenMovie)
      fetchData();
  }, [chosenMovie]);

  async function fetchScreenings() {
    const screeningsForMovie = await get(`screenings/movie/${chosenMovie.id}`);
    setScreenings(screeningsForMovie);
    console.log(screeningsForMovie)
  }

  function gotoBooking(screeningId) {
    navigate('/booking/' + screeningId);
  }

  const dateOptions = isNarrow ?
    { weekday: 'narrow', month: 'numeric', day: 'numeric' }
    : { weekday: 'short', month: 'short', day: 'numeric' };

  useEffect(() => {
    const updateWindowWidth = () => {
      setIsNarrow(window.innerWidth <= 751);
    };

    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const [isVeryNarrow, setIsVeryNarrow] = useState(window.innerWidth <= 751);

  useEffect(() => {
    const updateWindowWidth = () => {
      setIsVeryNarrow(window.innerWidth <= 751);
    };

    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <Container className='mt-1'>
      <Row style={{ marginTop: '3%', marginBottom: '3%', }} className="d-flex justify-content-center">
        <Col className='p-3 my-2 custom-background rounded' xs={12} md={2} >
          <div>{movie.title}</div>
          <div style={{ marginTop: '40px' }}>Speltid: 2 timmar 30 min</div>
          <div style={{ marginTop: '40px' }}>Kategori: Action</div>
        </Col>
        <Col xs={12} md={7} className='custom-background rounded my-2 mx-4 px-3'>
          <Row className="flex p-2 pb-3">
            {/*<Col className="d-flex justify-content-center align-items-center p-0">
              <Button variant="outline-dark" className="text-center h-100 w-75 border-0 ">❮</Button>
            </Col>*/}
            {screenings.slice(0, isNarrow ? (isVeryNarrow ? 4 : 5) : 7).map(({ date, screenings }) => (
              <Col key={date} className='flex justify-content-center align-items-center py-0 px-2 h-100'>
                <Row className='d-flex justify-content-center align-items-center text-center py-1 ' >
                  {isNarrow ?
                    (<p className="p-1 m-0 h-100">{new Date(date).toLocaleString('sv-SE', dateOptions).split(' ')[0]}
                      < br /> {new Date(date).toLocaleString('sv-SE', dateOptions).split(' ')[1]} </p>)
                    : (<p className="p-1 m-0 h-100">{new Date(date).toLocaleString('sv-SE', dateOptions)} </p>)}
                </Row>
                {screenings.map(({ id, time }) => (
                  <Row key={id} className="flex justify-content-center align-items-center">
                    <Button
                      key={id}
                      className='timeButton text-center bg-black border-0 text-light m-1 p-1 rounded'
                      onClick={() => gotoBooking(id)}
                    >
                      {time.slice(0, 5)}
                    </Button>
                  </Row>
                ))}
              </Col>
            ))}
            {/*<Col className="d-flex justify-content-center align-items-center p-0">
              <Button variant="outline-dark" className="text-center h-100 w-75 border-0">❯</Button>
            </Col>*/}
          </Row>
        </Col>
        <Col className='p-3 custom-background rounded my-2' xs={12} md={2} >
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