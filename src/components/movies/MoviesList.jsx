import { Grid } from '@mui/material';
import Movie from './Movie';

const MoviesList = ({ movies, numberOfMovies, excludeFirst }) => {
    const startFrom = excludeFirst ? 1 : 0;
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
            {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
                <Movie key={movie.id} movie={movie} i={i} />
            ))}
        </Grid>
    );
};

export default MoviesList;
