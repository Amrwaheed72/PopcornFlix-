import { Box, CircularProgress, Typography } from '@mui/material';
import { useGetMoviesQuery } from '../../services/TMDB';
import MoviesList from './MoviesList';

const Movies = () => {
    const { data, isLoading, error } = useGetMoviesQuery();
    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress size="4rem" />
            </Box>
        );
    }
    if (!data?.results.length) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', mt: '20px' }}>
                <Typography variant="h4">
                    No movies that match that name.
                </Typography>
                <br />
                Please search for something else
            </Box>
        );
    }
    if (error) return 'An error has occurred';
    return (
        <div>
            <MoviesList movies={data} />
        </div>
    );
};

export default Movies;
