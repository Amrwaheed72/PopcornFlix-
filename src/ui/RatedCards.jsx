import { Box, Typography } from '@mui/material';
import Movie from '../components/movies/Movie';

const RatedCards = ({ title, data }) => {
    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                {title}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {data?.results?.map((movie, i) => (
                    <Movie key={movie.id} movie={movie} i={i} />
                ))}
            </Box>
        </Box>
    );
};

export default RatedCards;
