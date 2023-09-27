// Only import your sass in App (not every component)
import "./sass/main.scss";
import React, { useState } from 'react';
import Filter from "./components/filter/filter";
import SeatsGrid from "./components/seatsGrid/SeatsGrid.jsx";
import MovieDetail from "./components/moviedetail/moviedetail";

// Import some Bootstrap components
import MainMenu from '@/components/MainMenu/MainMenu.jsx';
import Footer from "./components/Footer/Footer";
import { Container, Row, Col } from 'react-bootstrap';

export default function App() {


    return <>
        <MainMenu />
        <Container className="mt-5">
            <Row>
                <Col>
               
               <Filter>
            
               </Filter>
                <MovieDetail>

                </MovieDetail>

                <SeatsGrid>
                </SeatsGrid>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </>;
}