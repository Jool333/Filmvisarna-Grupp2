import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
    <Container >
      <Row className='custom-background p-2'>
        <Col>
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
        <Col>
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
      <Row>
        <Col>
          <div>
            <ul className='film-list'>
              {filteredMovies.map((movie) => (
                <li key={movie.id} className='film-list-item' >
                  <a href={'/movie/' + [movie.id]}>

                    <img src={movie.imgUrl} width="200px" className='poster-img' />

                  </a>

                </li>
              ))}
            </ul>

          </div>
        </Col>
      </Row>
    </Container >

  );
}

export default MainPage;
