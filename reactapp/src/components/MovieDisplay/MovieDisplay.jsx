import {
    Button,
    Container,
    Image
} from 'react-bootstrap';

function MovieDisplay(){
    return(
            <Container className='allmovies'>
                {movies.map((movie) => (
                    <Container className={movie.Title}>
                        <Image src={movie.imgUrl} alt='movie not found'></Image>
                        <Button variant='primary'></Button>
                    </Container>
                ))}
                
            </Container>
    );
}
export default MovieDisplay;