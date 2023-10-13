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

    var nbrOfDays = isNarrow ? 5 : 7;
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
    //href booking
  };
  /*
  {isNarrow ? (<button
                          href='/booking'
                          className="timeButton text-center bg-black border-0 text-light m-1 p-1 rounded "
                        >
                          {time.split(':')[0]}: <br /> {time.slice(3)}
                        </button>)
                          : (<button
                            href='/booking'
                            className="timeButton text-center bg-black border-0 text-light m-1 p-1 rounded "
                          >
                            {time}
                          </button>)}
  */

  //{isNarrow ? (<p>{date.split('')[0]} < br /> {date.slice(1)}</p>) : (<p>{date.split('')[0]} < br /> {date.slice(1)}</p>)}
  //onClick={() => handleTimeClick(date, time)}
  return (
    <Container>
      {movies.map((movie) => (
        <Row className="movie-schedule c-bg-2 p-1 d-flex justify-content-center align-items-center" >
          <Col lg={2} className="mb-1" key={movie.id}>
            <div className="movie-cover">
              <img src={movie.coverBild} alt={movie.titel} />
            </div>
          </Col>
          <Col xs={12} lg={10}>
            <Row className="flex py-2">
              {datesForWeek.map((date, index) => (
                <Col key={index} className='flex justify-content-center align-items-center p-0'>
                  <div className='d-flex justify-content-center align-items-center text-center py-1 custom-background' >
                    {isNarrow ?
                      (<p>{date.split(' ')[0]} < br /> {date.slice(1)}</p>)
                      : (<p>{date.split(' ')[0]}  {date.split(' ')[1] + ' ' + date.split(' ')[2]}</p>)}</div>
                  {showtimes[date].map((time, timeIndex) => (
                    <Row className='d-flex justify-content-center align-items-center'>
                      <Button
                        href={'/booking'}
                        className="timeButton text-center bg-black border-0 text-light m-1 p-1 rounded "
                      >
                        {isNarrow ? (<p>{time.split(':')[0]}: <br /> {time.slice(3)}</p>) : (<p>{time}</p>)}
                      </Button>
                    </Row>

                  ))}
                </Col>
              ))}
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
