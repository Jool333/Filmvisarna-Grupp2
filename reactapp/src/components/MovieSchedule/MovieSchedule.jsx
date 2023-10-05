import React from "react"
import { Container, Row} from "react-bootstrap";


function MovieSchedule({ movies }) {
  return (
    <Container>
        <Row>
        <div className="movie-schedule">
      {movies.map((movie) => (
        <div className="movie" key={movie.id}>
          <div className="movie-cover">
            <img src={movie.coverBild} alt={movie.titel} />
          </div>
          <div className="movie-details">
              {movie.visningar.map((visning, index) => (
                <div key={index} className="movie-showtimes">
                  <h4>{visning.dag}</h4>
                  <ul>
                    {visning.tider.map((tid, tidIndex) => (
                      <li key={tidIndex}><a href="/bookingviewpage">{tid}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
        </Row>
    </Container>
    
  );
}

export default MovieSchedule;
