import React, { useState, useEffect } from 'react';
import { Container, Row, Col , Button} from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';

function MainPage() {
  const outletContext = useOutletContext();
  const [movies, setMovies] = useState([]);
  const [filterData, setFilterData] = useState({
    selectedAgeRating: '',
    selectedDate: ''
  });
  const [filteredMovies, setFilteredMovies] = useState([]);


  const fetchData = async () => {
    try {
      const moviesData = await outletContext.movies;
      setMovies(moviesData);
    } catch (error) {
      console.error('Error fetching movies: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [outletContext]);

  useEffect(() => {
    filterMovies()
  }, [filterData, movies]);

  const screeningDate = [
    '2023-09-30',
    '2023-10-05',
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value })
    filterMovies()
  };

  const filterMovies = () => {
    const filtered = movies.filter(movie => {
      if ((filterData.selectedDate == '' /* || movie.screenings.some(screening => screening.screeningDate === filterData.selectedDate))*/)
        && (filterData.selectedAgeRating == '' || movie.ageLimit == filterData.selectedAgeRating)
      ) {
        return true;
      }
      return false;

    });

    setFilteredMovies(filtered);
  };

  return (
    <Container className='container-main' >
      <Row className='filter-main d-flex justify-content-center'>
        <div className='d-flex justify-content-center'>

          <Col className='data-container'>
            <select
              id="dateSelect"
              value={filterData.selectedDate}
              onChange={handleFilterChange}
            >
              <option value="">Välj datum</option>
              {screeningDate.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </Col>
          <Col className='age-container'>
            <select
              id="ageRatingSelect"
              value={filterData.selectedAgeRating}
              onChange={handleFilterChange}
            >
              <option value="">Välj åldersgräns</option>
              <option value="">Alla åldersgränser</option>
              <option value="G">G</option>
              <option value="PG">PG</option>
              <option value="PG-13">PG-13</option>
              <option value="R">R</option>
              <option value="NC-17">NC-17</option>
            </select>
          </Col>
          <Col className='filter-buuton d-flex justify-content-center'>
            <Button variant="light" size="sm" onClick={filterMovies}>
              Filtrera
            </Button>
          </Col>
        </div>

      </Row>


      <Row>
        <Col>


          <Row className='justify-content-center mt-5 '>
            {filteredMovies.map((movie) => (
              <Col xs={6} sm={4} md={3} lg={3} xl={3} key={movie.id} className='  mb-5     row align-items-center '  >
                <a href={'/movie/' + [movie.id]}>
                  <img src={movie.imgUrl} width={160} />
                </a>
              </Col>
            ))}
          </Row>

        </Col>
      </Row>
    </Container >

  );
}

export default MainPage;
