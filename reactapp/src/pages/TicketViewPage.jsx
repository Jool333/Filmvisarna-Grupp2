import React, { useState, useEffect } from "react";
import AgeFilter from "../components/AgeFilter/AgeFilter";
import MovieSchedule from "../components/MovieSchedule/MovieSchedule";
import { Container, Row } from "react-bootstrap";
import { useOutletContext } from 'react-router-dom';

function TicketViewPage() {
  const outletContext = useOutletContext();
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [ageRating, setAgeRating] = useState("");

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
  }, [ageRating, movies]);

  const updateAgeRating = (e) => {
    setAgeRating(e)
    filterMovies()
  };

  const filterMovies = () => {
    const filtered = movies.filter(movie => {
      if (ageRating == '' || movie.ageLimit == ageRating) {
        return true;
      }
      return false;

    });

    setFilteredMovies(filtered);
  };

  return (
    <Container>
      <Row>
        <div>
          <AgeFilter handleAgeChange={updateAgeRating} />
          <MovieSchedule movies={filteredMovies} />
        </div>
      </Row>
    </Container>
  );
}

export default TicketViewPage;
