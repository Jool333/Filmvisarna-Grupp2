import React, { useState , useEffect} from 'react';
import { Container, Row, Col, Button ,Nav} from 'react-bootstrap';

import img1 from "@/assets/poster/1.jpeg"
import img2 from "@/assets/poster/2.jpeg"
import img3 from "@/assets/poster/3.jpeg"
import img4 from "@/assets/poster/4.jpeg"
import img5 from "@/assets/poster/5.jpeg"
import img6 from "@/assets/poster/6.jpeg"

import img7 from "@/assets/poster/7.jpeg"
import img8 from "@/assets/poster/8.jpeg"
import img9 from "@/assets/poster/9.jpeg"
import img10 from "@/assets/poster/10.jpeg"
import img11 from "@/assets/poster/11.jpeg"
import img12 from "@/assets/poster/12.jpeg"


// Import your custom components here
import BookingViewPage from "./BookingViewPage"; // Replace with the correct import path

function MainPage() {

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedAgeRating, setSelectedAgeRating] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  



  const FilmsData = [
    {
      title: 'Film 1',
      date: '2023-09-30',
      ageRating: 'PG',
      img: img1

    },
    {
      title: 'Film 2',
      date: '2023-10-05',
      ageRating: 'NC-17',
      img: img2
    },
    {
      title: 'Film 3',
      date: '2023-10-05',
      ageRating: 'G',
      img: img3
    },
    {
      title: 'Film 4',
      date: '2023-10-05',
      ageRating: 'PG-13',
      img: img4
    },
    {
      title: 'Film 5',
      date: '2023-10-05',
      ageRating: 'NC-17',
      img:img5
    },
    {
      title: 'Film 6',
      date: '2023-10-05',
      ageRating: 'R',
      img:img6
    },
    {
      title: 'Film 1',
      date: '2023-09-30',
      ageRating: 'NC-17',
      img: img7

    },
    {
      title: 'Film 2',
      date: '2023-10-05',
      ageRating: 'R',
      img: img8
    },
    {
      title: 'Film 3',
      date: '2023-10-05',
      ageRating: 'G',
      img: img9
    },
    {
      title: 'Film 4',
      date: '2023-10-05',
      ageRating: 'PG',
      img: img10
    },
    {
      title: 'Film 5',
      date: '2023-10-05',
      ageRating: 'PG-13',
      img:img11
    },
    {
      title: 'Film 6',
      date: '2023-10-05',
      ageRating: 'PG-13',
      img:img12, 
      link:"/MovieDetailPage"
    }

  ];

  const days = [
    '2023-09-30',
    '2023-10-05',

  ];

  const filterMovies = () => {
    console.log('filtered')

    // setFilterMode(true)
    const filtered = FilmsData.filter(movie => {
      if (selectedDate && movie.date !== selectedDate) {
        return false;
      }
      if (selectedAgeRating && movie.ageRating !== selectedAgeRating) {
        return false;
      }
      return true;

    });
    console.log(filtered)

    setFilteredMovies(filtered);
  };



  useEffect(() => {  
    

    filterMovies()

   },[]);

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <ul className='film-list'>
              {filteredMovies.map((movie, index) => (
                <li key={index}  className='film-list-item' >
                  <Nav.Link href={movie.link} style={{color:"black"}}>

                  <img src={movie.img}  width="200px" className='poster-img' />
                  
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
