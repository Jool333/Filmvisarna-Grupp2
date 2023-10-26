import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { get } from '../../ApiConnection';

function MovieDetail({ chosenMovie }) {

  const navigate = useNavigate();
  const [movie, setMovie] = useState('');
  const [isNarrow, setIsNarrow] = useState(window.innerWidth <= 1383);
  const [isVeryNarrow, setIsVeryNarrow] = useState(window.innerWidth <= 980);
  const [screenings, setScreenings] = useState([]);

  const [categories, setCategories] = useState([]);

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
    const category = await get(`category/movie/${chosenMovie.id}`);
    setCategories(category)
    setScreenings(screeningsForMovie);
  }

  function gotoBooking(screeningId) {
    navigate('/booking/' + screeningId);
  }

  const dateOptions = isNarrow ?
    { weekday: 'narrow', month: 'numeric', day: 'numeric' }
    : { weekday: 'short', month: 'short', day: 'numeric' };



  useEffect(() => {
    const updateWindowWidth = () => {
      setIsNarrow(window.innerWidth <= 1383);
    };

    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);



  useEffect(() => {
    const updateWindowWidth = () => {
      setIsVeryNarrow(window.innerWidth <= 980);
    };

    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <Container className='mt-1'>
      <Row className="d-flex justify-content-center mt-4">
        <Col className='p-3 my-2 custom-background rounded' md={12} lg={2} >
          <h5>{movie.title}</h5>
          <h6 >Speltid:{isVeryNarrow ? " " : <br />} {Math.floor(movie.duration / 60)} {movie.duration <= 120 ? "timme" : "timmar"} {Math.floor(movie.duration % 60)} {movie.duration % 60 > 1 ? "minuter" : "minut"}</h6>
          <h6 >Åldersgräns: {movie.ageLimit}</h6>
          <div>

            <span>Genre: </span>
            {categories.map(( item, key ) => {
              return (
                <span key={key}>{ item.category} </span>
              )
            })}
          </div>
      
        
        </Col>
        <Col md={12} lg={6} className='custom-background rounded my-2 mx-4 px-3'>
          <Row className="flex p-0 pb-3">
            {/*<Col className="d-flex justify-content-center align-items-center p-0">
              <Button variant="outline-dark" className="text-center h-100 w-75 border-0 ">❮</Button>
            </Col>*/}
            {screenings.slice(0, isNarrow ? (isVeryNarrow ? 4 : 5) : 6).map(({ date, screenings }) => (
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
                      className='timeButton text-center bg-black border-0 text-light m-1 p-2 rounded'
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
        <Col className='p-3 custom-background rounded my-2' md={12} lg={3} >
          <div>
            {movie.description}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetail;