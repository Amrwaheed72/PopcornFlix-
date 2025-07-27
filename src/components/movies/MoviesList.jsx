import { Grid } from '@mui/material';
import Movie from './Movie';

const MoviesList = ({ movies }) => {
    console.log(movies)
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
            {movies.results.map((movie, i) => (
                <Movie key={movie.id} movie={movie} i={i} />
            ))}
        </Grid>
    );
};

export default MoviesList;
