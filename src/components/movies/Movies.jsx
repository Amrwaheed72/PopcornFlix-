import { Box, CircularProgress, Typography } from '@mui/material';
import { useGetMoviesQuery } from '../../services/TMDB';
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Movies = () => {
    const [page, setPage] = useState(1);
    const { genreIdOrCategoryName,searchQuery } = useSelector(
        (state) => state.currentGenreOrCategory,
    );
    const { data, isLoading, error } = useGetMoviesQuery({
        genreIdOrCategoryName,
        page,
        searchQuery
    });
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
