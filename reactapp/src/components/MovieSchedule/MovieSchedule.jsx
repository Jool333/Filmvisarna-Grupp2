import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { get } from "../../ApiConnection";


function MovieSchedule({ movies }) {

  const navigate = useNavigate();

  const [screenings, setScreenings] = useState([]);

  async function fetchScreenings() {
    const movieScreeningsMap = {};

    for (const movie of movies) {
      const screeningsForMovie = await get(`screenings/movie/${movie.id}`)

      const filteredScreenings = screeningsForMovie.filter(screening =>
        (new Date(screening.screeningDate) >= new Date()));

      movieScreeningsMap[movie.id] = screeningsForMovie;
    };
    setScreenings(movieScreeningsMap);
    //console.log(movieScreeningsMap)
  }

  const fetchData = async () => {
    try {
      if (movies) {
        await fetchScreenings();
      }
    } catch (error) {
      console.error('Error fetching : ', error);
    }
  };

  useEffect(() => {
    if (movies) {
      fetchData();
    }
  }, [movies]);

  function gotoBooking(screeningId) {
    navigate('/booking/' + screeningId);
  }

  const [isNarrow, setIsNarrow] = useState(window.innerWidth <= 1383);

  useEffect(() => {
    const updateWindowWidth = () => {
      setIsNarrow(window.innerWidth <= 1383);
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

  const dateOptions = isNarrow ?
    { weekday: 'narrow', month: 'numeric', day: 'numeric' }
    : { weekday: 'short', month: 'short', day: 'numeric' };

  return (
    <Container>
      {movies.map((movie) => (
        <Row key={movie.id} className="movie-schedule p-1 d-flex justify-content-center align-items-center text-light" >
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
            <Row className="flex py-2 justify-content-between text-dark m-2">
              {/*<Col className="d-flex justify-content-center align-items-center p-0">
              <Button variant="outline-dark" className="text-center h-100 w-75 border-0 ">❮</Button>
            </Col>*/}


              {screenings[movie.id]?.slice(0, isNarrow ? (isVeryNarrow ? 4 : 5) : 7).map(({ date, screenings }) => (
                <Col key={date} className='flex justify-content-center align-items-center p-0 h-100'>
                  <Row className='d-flex justify-content-center align-items-center text-center py-1 mb-2 bg-filter rounded' >
                    {isNarrow ?
                      (<p className="p-1 m-0 h-100">{new Date(date).toLocaleString('sv-SE', dateOptions).split(' ')[0]}
                        < br /> {new Date(date).toLocaleString('sv-SE', dateOptions).split(' ')[1]} </p>)
                      : (<p className="p-1 m-0 h-100">{new Date(date).toLocaleString('sv-SE', dateOptions)} </p>)}
                  </Row>
                  {screenings.map(({ id, time }) => (
                    <Row key={id} className="flex justify-content-center align-items-center">
                      <Button
                        key={id}
                        className='timeButton text-center custom-background border-0 text-dark m-1 mb-2 p-2 rounded'
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
          <hr />
        </Row >
      ))}
    </Container >
  );
}

export default MovieSchedule;
