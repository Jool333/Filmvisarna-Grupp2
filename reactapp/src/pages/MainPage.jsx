import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useOutletContext, NavLink } from 'react-router-dom';

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
    <Container className='flex justify-content-between align-content-center' >
      <Row className='bg-filter p-2 text-center rounded'>
        <Col className='py-1 px-2'>
          <label htmlFor="dateSelect">Välj datum:</label>
          <select
            id="dateSelect"
            name="selectedDate"
            value={filterData.selectedDate}
            onChange={handleFilterChange}
            disabled //temp until fix
          >
            <option value="">Alla dagar</option>
            {screeningDate.map((day, index) => (
              <option key={index} value={day}>
                {day}
              </option>
            ))}
          </select>
        </Col>
        <Col className='py-1 px-3'>
          <label htmlFor="ageRatingSelect">Välj åldersgräns:</label>
          <select
            id="ageRatingSelect"
            name="selectedAgeRating"
            value={filterData.selectedAgeRating}
            onChange={handleFilterChange}
          >
            <option value="">Alla åldersgränser</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
            <option value="NC-17">NC-17</option>
          </select>
        </Col>
      </Row>
      <Row xs={12} lg={9} className='flex justify-content-center align-content-center my-3 p-0 '>
        {filteredMovies.map((movie) => (
          <Col xs={4} md={3} lg={2} key={movie.id} className='p-1 my-2 mx-3 flex justify-content-center align-content-center' >
            <NavLink to={'/movie/' + [movie.id]}>

              <img src={movie.imgUrl} className='mw-100 w-100' />

            </NavLink>

          </Col>
        ))}
      </Row>
    </Container >

  );
}

export default MainPage;
