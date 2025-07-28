import {
    Box,
    Grid,
    Grow,
    Rating,
    Tooltip,
    Typography,
    useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

const Movie = ({ movie, i }) => {
    const theme = useTheme();
    return (
        <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
            sx={{ padding: '10px' }}
        >
            <Grow in key={i} timeout={(i + 1) * 200}>
                <MuiLink
                    component={RouterLink}
                    to={`/movie/${movie.id}`}
                    sx={{
                        alignItems: 'center',
                        fontWeight: 'bold',
                        [theme.breakpoints.up('xs')]: {
                            display: 'flex',
                            flexDirection: 'column',
                        },
                        ':hover': {
                            cursor: 'pointer',
                        },
                        textDecoration: 'none',
                    }}
                >
                    {movie.poster_path ? (
                        <Box
                            sx={{
                                borderRadius: '20px',
                                height: '300px',
                                marginBottom: '10px',
                                transition: 'all 0.4s',
                                ':hover': { transform: 'scale(1.05)' },
                            }}
                            component="img"
                            alt={movie.title}
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        />
                    ) : (
                        <Box
                            sx={{
                                borderRadius: '20px',
                                height: '300px',
                                marginBottom: '10px',
                                transition: 'all 0.4s',
                                ':hover': { transform: 'scale(1.05)' },
                            }}
                            component="img"
                            alt={movie.title}
                            src="https://www.fillmurray.com/200/300"
                        />
                    )}
                    <Typography
                        variant="h5"
                        sx={{
                            color: theme.palette.text.primary,
                            textOverflow: 'ellipsis',
                            width: '230px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            marginTop: '10px',
                            marginBottom: '0',
                            textAlign: 'center',
                        }}
                    >
                        {movie.title}
                    </Typography>
                    <Tooltip
                        disableTouchListener
                        title={`${movie.vote_average} / 10`}
                    >
                        <Box component="div">
                            <Rating
                                readOnly
                                value={movie.vote_average / 2}
                                precision={0.1}
                            />
                        </Box>
                    </Tooltip>
                </MuiLink>
            </Grow>
        </Grid>
    );
};

export default Movie;
