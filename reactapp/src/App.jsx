// Only import your sass in App (not every component)
import "./sass/main.scss";
import Filter from "./components/filter/filter";
import SeatsGrid from "./components/seatsGrid/SeatsGrid";
import MovieDetail from "./components/moviedetail/moviedetail";
import TrailerPoster from "./components/DetailTrailerPoster/TrailerPoster";



import BookningViewPage from "./components/pages/BookingViewPage";
// Import some Bootstrap components
import MainMenu from '@/components/MainMenu/MainMenu.jsx';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { Container, Row, Col } from 'react-bootstrap';

export default function App() {


    return <>

        <Header />

        <MainMenu />
        <Container className="mt-5">
            <Row>
                <Col>

                    <Filter>

                    </Filter>
                    <TrailerPoster/>
                    <MovieDetail>

                    </MovieDetail>

                    <SeatsGrid>
                    </SeatsGrid>

                    < BookningViewPage />

                </Col>
            </Row>


        </Container>



        <Footer />




    </>;
}