import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap";


function MovieSchedule({ movies }) {

  const [isNarrow, setIsNarrow] = useState(window.innerWidth <= 751);

  useEffect(() => {
    const updateWindowWidth = () => {
      setIsNarrow(window.innerWidth <= 751);
    };

    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const generateDatesForWeek = () => {
    const today = new Date();
    const days = [];

    today.setDate(today.getDate());

    var nbrOfDays = isNarrow ? 4 : 7;
    for (let i = 0; i < nbrOfDays; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      const options = isNarrow ? { weekday: 'narrow', month: 'numeric', day: 'numeric', locale: 'sv-SE' } : { weekday: 'short', month: 'short', day: 'numeric', locale: 'sv-SE' };
      days.push(date.toLocaleDateString('sv-SE', options));
    }

    return days;
  };

  const generateFixedShowtimes = () => {
    const showtimes = {};

    const times = {
      ordtider: ['18:00', '19:15', '20:00'],
      söndag: ['20:00', '21:15'],
    };

    for (const date of datesForWeek) {
      if (date.includes('sön')) {
        showtimes[date] = times.söndag;
      } else {
        showtimes[date] = times.ordtider;
      }
    }

    return showtimes;
  };

  const datesForWeek = generateDatesForWeek();
  const showtimes = generateFixedShowtimes();

  const handleTimeClick = (date, time) => {
    console.log(`Tid klickad: ${date}, ${time}`);
  };

  //{isNarrow ? (<p>{date.split('')[0]} < br /> {date.slice(1)}</p>) : (<p>{date.split('')[0]} < br /> {date.slice(1)}</p>)}
  //onClick={() => handleTimeClick(date, time)}
  return (
    <Container>
      {movies.map((movie) => (
        <Row key={movie.id} className="movie-schedule c-bg-2 p-1 d-flex justify-content-center align-items-center" >
          <Col xs={12} lg={2} className="m-1">
            <Row>
              <Col className="movie-cover d-flex justify-content-center align-items-center ">
                <a href={"/movie/" + movie.id}>
                  <img src={movie.imgUrl} alt={movie.titel} />
                </a>
              </Col>
            </Row>
          </Col>

          <Col xs={12} lg={9}>
            <Row className="d-flex">
              <h3>{movie.title}</h3>
              <h4>2h 30min</h4>
              <h5>Åldersgräns: {movie.ageLimit}</h5>

            </Row>
            <Row className="flex py-2">
              <Col className="d-flex justify-content-center align-items-center p-0">
                <Button variant="outline-dark" className="text-center h-100 w-75 border-0 ">❮</Button>
              </Col>
              {datesForWeek.map((date, index) => (
                <Col key={index} className='flex justify-content-center align-items-center p-0'>
                  <div className='d-flex justify-content-center align-items-center text-center py-1 custom-background' >
                    {isNarrow ?
                      (<p className="p-1 m-0 h-100">{date.split(' ')[0]} < br /> {date.slice(1)}</p>)
                      : (<p className="p-1 m-0 h-100">{date.split(' ')[0]}  {date.split(' ')[1] + ' ' + date.split(' ')[2]}</p>)}</div>
                  {showtimes[date].map((time, index) => (
                    <Row key={index} className='d-flex justify-content-center align-items-center'>
                      <Button
                        className="timeButton text-center bg-black border-0 text-light m-1 p-1 rounded "
                        onClick={() => handleTimeClick(date, time)}
                        href={'/booking'}
                      >
                        {isNarrow ? (<p>{time.split(':')[0]}: <br /> {time.slice(3)}</p>) : (<p>{time}</p>)}
                      </Button>
                    </Row>

                  ))}
                </Col>
              ))}
              <Col className="d-flex justify-content-center align-items-center p-0">
                <Button variant="outline-dark" className="text-center h-100 w-75 border-0">❯</Button>
              </Col>
            </Row>
          </Col>

          <hr />
        </Row>
      ))
      }

    </Container >

  );
}

export default MovieSchedule;
