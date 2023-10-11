import React, { useState } from "react";
import AgeFilter from "../components/AgeFilter/AgeFilter";
import MovieSchedule from "../components/MovieSchedule/MovieSchedule";
import { Container, Row } from "react-bootstrap";



function TicketViewPage() {
  const [selectedAge, setSelectedAge] = useState("all"); // Åldersgränsfilter
  const imagessource = "src\\images\\"
  // Exempeldata för filmer och deras visningar
  const movies = [
    {
      id: 1,
      titel: "De Ostyriga",
      coverBild: imagessource+"Poster.jpg",
      visningar: [
        { dag: "Måndag", tider: ["18:00", "20:00"] },
        { dag: "Tisdag", tider: ["18:00", "20:00"] },
        { dag: "Onsdag", tider: ["18:00", "20:00"] },
        { dag: "Torsdag", tider: ["18:00", "20:00", "22:00"] },
        { dag: "Fredag", tider: ["19:00", "21:00", "23:00"] },
        { dag: "Lördag", tider: ["19:00", "21:00", "23:00"] },
        { dag: "Söndag", tider: ["10:00", "15:00", "20:00"] },
      ],
    },
    {
      id: 1,
      titel: "De Ostyriga",
      coverBild: imagessource+"frittfall.jpeg",
      visningar: [
        { dag: "Måndag", tider: ["18:00", "20:00"] },
        { dag: "Tisdag", tider: ["18:00", "20:00"] },
        { dag: "Onsdag", tider: ["18:00", "20:00"] },
        { dag: "Torsdag", tider: ["18:00", "20:00", "22:00"] },
        { dag: "Fredag", tider: ["19:00", "21:00", "23:00"] },
        { dag: "Lördag", tider: ["19:00", "21:00", "23:00"] },
        { dag: "Söndag", tider: ["19:00", "21:00", "23:00"] },
      ],
    },
    {
      id: 1,
      titel: "De Ostyriga",
      coverBild: imagessource+"venedig.jpeg",
      visningar: [
        { dag: "Måndag", tider: ["18:00", "20:00"] },
        { dag: "Tisdag", tider: ["18:00", "20:00"] },
        { dag: "Onsdag", tider: ["18:00", "20:00"] },
        { dag: "Torsdag", tider: ["18:00", "20:00", "22:00"] },
        { dag: "Fredag", tider: ["19:00", "21:00", "23:00"] },
        { dag: "Lördag", tider: ["19:00", "21:00", "23:00"] },
        { dag: "Söndag", tider: ["19:00", "21:00", "23:00"] },
      ],
    },
    // Lägg till fler filmer här
  ];

  // Funktion för att hantera ändringar i åldersgränsfiltret
  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
  };

  // Filtrera filmer baserat på åldersgräns
  const filteredMovies = selectedAge === "all"
    ? movies
    : movies.filter((movie) => movie.åldersgräns === selectedAge);

  return (
    <Container>
        <Row>
        <div>
        <AgeFilter selectedAge={selectedAge} handleAgeChange={handleAgeChange} />
        <MovieSchedule movies={filteredMovies} />
        </div>
        </Row>
    </Container>
  );
}

export default TicketViewPage;
