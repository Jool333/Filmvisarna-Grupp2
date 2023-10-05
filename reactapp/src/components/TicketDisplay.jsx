function TicketDisplay(){
    const filteredMovies = movies.filter(movie => movie.Date === givenDate && movie.Age === givenAge );
    return(
        <Container className='allmovies'>
                {filteredMovies.map((movie) => (
                    <Container className={movie.Title}>
                        <Row>
                            <Col>
                                <Image src={movie.imgUrl} alt='movie not found'></Image>
                            </Col>
                        </Row>
                        
                        
                    </Container>
                ))}
                
            </Container>
    );
}

export default TicketDisplay;