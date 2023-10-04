import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import imgtest from "../images/poster/1.jpeg"


function MainPage() {

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedAgeRating, setSelectedAgeRating] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);


  const FilmsData = [
    {
      title: 'Film 1',
      date: '2023-09-30',
      ageRating: 'PG-13',
      img: "../images/poster/1.jpeg"

    },
    {
      title: 'Film 2',
      date: '2023-10-05',
      ageRating: 'R',
      img: "../images/poster/1.jpeg"

    },
    {
      title: 'Film 3',
      date: '2023-10-05',
      ageRating: 'G',
      img: "../images/poster/1.jpeg"

    },
    {
      title: 'Film 4',
      date: '2023-10-05',
      ageRating: 'PG',

      img: "../images/poster/1.jpeg"
    },
    {
      title: 'Film 5',
      date: '2023-10-05',
      ageRating: 'NC-17',
      img: "../images/poster/1.jpeg"

    },
    {
      title: 'Film 6',
      date: '2023-10-05',
      ageRating: 'PG-13',
      img: "../images/poster/1.jpeg"
    }

  ];

  const days = [
    '2023-09-30',
    '2023-10-05',

  ];

  const filterMovies = () => {
    const filtered = moviesData.filter(movie => {
      if (selectedDate && movie.date !== selectedDate) {
        return false;
      }
      if (selectedAgeRating && movie.ageRating !== selectedAgeRating) {
        return false;
      }
      return true;
    });

    setFilteredMovies(filtered);
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <label htmlFor="dateSelect">Välj datum:</label>
          <select
            id="dateSelect"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
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
            value={selectedAgeRating}
            onChange={(e) => setSelectedAgeRating(e.target.value)}
          >
            <option value="">Alla åldersgränser</option>
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
            <h2>Resultat</h2>
            <ul>
              {FilmsData.map((movie, index) => (
                <li key={index}>
                  <h3>{movie.title}</h3>
                  <p>Datum: {movie.date}</p>
                  <p>Åldersgräns: {movie.ageRating}</p>

                 
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
