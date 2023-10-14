import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';

function MainPage() {

  const movies = useOutletContext().movies;
  const [filterData, setFilterData] = useState({
    agelimit: 'Alla',
    date: 'Idag'
  });

  const days = [
    '2023-09-30',
    '2023-10-05',
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilterData({ ...filterData, [name]: value });
  };


  return (
    <Container >
      <Row className='custom-background p-2'>
        <Col>
          <label htmlFor="dateSelect">Välj datum:</label>
          <select
            id="dateSelect"
            value={filterData.date}
            onChange={handleFilterChange}
            disabled
          >
            <option value="">Välj dag</option>
            {days.map((day, index) => (
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
            value={filterData.agelimit}
            onChange={handleFilterChange}
          >
            <option value="E">Alla åldersgränser</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
            <option value="NC-17">NC-17</option>
          </select>
        </Col>
        <Col className='text-center'>
          <Button variant="light" size="sm" onClick={filterMovies}>
            Filtrera
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <ul className='film-list'>
              {filteredMovies.map((movie) => (
                <li key={movie.id} className='film-list-item' >
                  <Nav.Link href={'/movie/' + [movie.id]}>

                    <img src={movie.imgUrl} width="200px" className='poster-img' />

                  </Nav.Link>

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
