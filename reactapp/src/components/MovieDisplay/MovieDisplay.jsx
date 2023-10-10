import {
    Container,
    Image
} from 'react-bootstrap';

function MovieDisplay(){
    return(
            <Container className='allmovies'>
                {movies.map((movie) => (
                    <Container className={movie.Title}>
                        <Image src={movie.imgUrl} alt='movieImg not found'></Image>
                    </Container>
                ))}
            </Container>
    );
}
export default MovieDisplay;