import { Grid } from '@mui/material';
import Movie from './Movie';

const MoviesList = ({ movies, numberOfMovies }) => {
    return (
        <Grid
            container
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: {
                    xs: 'center',
                    sm: 'space-between',
                },
                overflow: 'auto',
            }}
        >
            {movies.results.slice(0,numberOfMovies).map((movie, i) => (
                <Movie key={movie.id} movie={movie} i={i} />
            ))}
        </Grid>
    );
};

export default MoviesList;
