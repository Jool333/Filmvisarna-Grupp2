import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const movie = {
    embedUrl: "U1fu_sA7XhE",
    imgUrl: "https://images.photowall.com/products/51078/movie-poster-jaws.jpg?h=699&q=85"
};

function TrailerPoster() {
    const [height, setHeight] = useState('500px');
    const iframeRef = useRef(null);

    useEffect(() => {
        const onLoad = () => {
            setHeight(iframeRef.current.contentWindow.document.body.scrollHeight + 'px');
        };
        onLoad();
    }, []);

    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col >
                    <iframe className="embed-responsive-item"
                        src={"https://www.youtube.com/embed/" + `${movie.embedUrl}`}
                        height={height}
                        width="100%"
                        ref={iframeRef}
                    />
                </Col>
                <Col md="auto">
                    <Image src={movie.imgUrl} 
                    alt="imgNotFound"
                    height={height} />
                </Col>
            </Row>
        </Container>
    );
}

export default TrailerPoster;