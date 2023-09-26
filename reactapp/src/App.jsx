// Only import your sass in App (not every component)
import "./sass/main.scss";

// Import some Bootstrap components
import MainMenu from '@/components/MainMenu/MainMenu.jsx';
import Footer from "./components/Footer/Footer";
import TrailerPoster from "./components/DetailTrailerPoster/TrailerPoser";
import { Container, Row, Col } from 'react-bootstrap';

export default function App() {
    return <>
        <MainMenu />
        <Container className="mt-5">
            <Row>
                <Col>
                    <TrailerPoster/>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </>;
}