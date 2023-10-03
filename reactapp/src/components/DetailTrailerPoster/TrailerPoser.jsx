import { Container, Row, Col, Image } from 'react-bootstrap';

const movie=
    {
        embedUrl:"vlDzYIIOYmM"
    };

const [height, setHeight] = useState('0px');
const onLoad = () => {
    setHeight(ref.current.contentWindow.document.body.scrollHeight + 'px');
};
useEffect(() => {
    onLoad();
}, []);



function TrailerPoster(){
    return(
        <Container>
            <Row className='justify-content-md-center'>
                    <Col md="auto">
                    <iframe className="embed-responsive-item" 
                    src={"https://www.youtube.com/embed/"+`${movie.embedUrl}`}
                    height={height}
                    width="1000em"
                    />
                </Col>
                <Col md="auto">
                    <Image src={movie.imgUrl} alt="imgNotFound"/>
                </Col>
            </Row>
        </Container>
    );
}
export default TrailerPoster;