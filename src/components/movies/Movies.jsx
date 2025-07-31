import {
    Box,
    CircularProgress,
    Grid,
    Skeleton,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useGetMoviesQuery } from '../../services/TMDB';
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Pagination from '../../ui/Pagination';
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie';
import MoviesSkeleton from './MoviesSkeleton';

const Movies = () => {
    const [page, setPage] = useState(1);
    const { genreIdOrCategoryName, searchQuery } = useSelector(
        (state) => state.currentGenreOrCategory,
    );
    const { data, isLoading, error } = useGetMoviesQuery({
        genreIdOrCategoryName,
        page,
        searchQuery,
    });
    const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
    const numberOfMovies = lg ? 17 : 19;
    // if (isLoading) {
    //     return (
    //         <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    //             <CircularProgress size="4rem" />
    //         </Box>
    //     );
    // }
    if (error) return 'An error has occurred';
    return isLoading ? (
        <Grid>
            <Skeleton sx={{ width: '100%' }} height={500} variant="rectangle" />
            <MoviesSkeleton />
        </Grid>
    ) : (
        <div>
            <FeaturedMovie movie={data.results[0]} />
            <MoviesList
                movies={data}
                numberOfMovies={numberOfMovies}
                excludeFirst
            />
            <Pagination
                page={page}
                setPage={setPage}
                totalPages={data.total_pages}
            />
        </div>
    );
};

export default Movies;
