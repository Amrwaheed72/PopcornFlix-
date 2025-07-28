import { Link as RouterLink, useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../services/TMDB';
import { Link as MuiLink } from '@mui/material';
import {
    Box,
    Grid,
    Rating,
    Tooltip,
    Typography,
    useTheme,
} from '@mui/material';
import genreIcons from '../../assets/genres';
import { useDispatch } from 'react-redux';
import { selectGenreOrCategory } from '../../app/currentGenreOrCategory';

const MovieInformation = () => {
    const { movieId } = useParams();
    const theme = useTheme();
    console.log(movieId);
    const dispatch = useDispatch();
    const { data, isLoading, error } = useGetMovieQuery(movieId);
    if (error) {
        return (
            <Box>
                <RouterLink to="/">
                    something has gone wrong, go back
                </RouterLink>
            </Box>
        );
    }
    console.log(data);
    return (
        <Grid
            container
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                margin: '10px 0 ',
                [theme.breakpoints.down('sm')]: {
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                },
            }}
        >
            <Grid item sm={12} lg={4}>
                <Box
                    component="img"
                    sx={{
                        borderRadius: '20px',
                        boxShadow: '0.5em 1em 1em rgb(64,64,70)',
                        width: '80%',

                        [theme.breakpoints.down('md')]: {
                            display: 'block',
                            margin: '0 auto',
                            width: '50%',
                            // height: '350px',
                        },

                        [theme.breakpoints.down('sm')]: {
                            display: 'block',
                            margin: '0 auto',
                            width: '100%',
                            // height: '350px',
                            marginBottom: '30px',
                        },
                    }}
                    src={
                        data?.poster_path
                            ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                            : 'https://via.placeholder.com/500x750'
                    }
                    alt={data?.title}
                />
            </Grid>
            <Grid item container direction="column" lg={7}>
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    sx={{ marginTop: '70px' }}
                >
                    {data?.title} ({data?.release_date.split('-')[0]})
                </Typography>
                <Typography variant="h5" align="center" gutterBottom>
                    {data?.tagline}
                </Typography>
                <Grid
                    item
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        margin: '10px 0 ',
                        [theme.breakpoints.down('sm')]: {
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                        },
                    }}
                >
                    <Box display="flex" align="center">
                        <Tooltip
                            disableTouchListener
                            title={`${data?.vote_average} / 10`}
                        >
                            <Box>
                                <Rating
                                    readOnly
                                    value={data?.vote_average / 2}
                                    precision={0.1}
                                />
                            </Box>
                        </Tooltip>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            sx={{ marginLeft: '10px' }}
                        >
                            {data?.vote_average} / 10
                        </Typography>
                    </Box>
                    <Typography variant="h6" align="center" gutterBottom>
                        {data?.runtime}min /{' '}
                        {data?.spoken_languages.length > 0
                            ? data?.spoken_languages[0].name
                            : ''}
                    </Typography>
                </Grid>
                <Grid
                    item
                    sx={{
                        margin: '10px 0',
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                    }}
                >
                    {data?.genres?.map((genre, i) => (
                        <MuiLink
                            component={RouterLink}
                            key={genre.name}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                [theme.breakpoints.down('sm')]: {
                                    padding: '0.5rem 1rem',
                                },
                            }}
                            to="/"
                            onClick={() =>
                                dispatch(selectGenreOrCategory(genre.id))
                            }
                        >
                            <img
                                src={genreIcons[genre.name.toLowerCase()]}
                                alt="hi"
                                height={30}
                                style={{
                                    filter:
                                        theme.palette.mode === 'dark'
                                            ? 'invert(1)'
                                            : 'dark',
                                    marginRight: '10px',
                                }}
                            />
                            <Typography variant="subtitle1" color="textPrimary">
                                {genre?.name}
                            </Typography>
                        </MuiLink>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MovieInformation;
