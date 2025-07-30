import { Link, Link as RouterLink, useParams } from 'react-router-dom';
import {
    useGetCreditsQuery,
    useGetMovieQuery,
    useGetRecommendationsQuery,
} from '../../services/TMDB';
import {
    Button,
    ButtonGroup,
    Modal,
    Link as MuiLink,
    useMediaQuery,
} from '@mui/material';
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
import {
    ArrowBack,
    Favorite,
    FavoriteBorderOutlined,
    Language,
    MovieOutlined,
    PlusOne,
    Remove,
    Theaters,
} from '@mui/icons-material';
import MoviesList from '../movies/MoviesList';
import { useState } from 'react';

const MovieInformation = () => {
    const [open, setOpen] = useState(false);
    const { movieId } = useParams();
    const theme = useTheme();
    const dispatch = useDispatch();
    const { data, isLoading, error } = useGetMovieQuery(movieId);
    const {
        data: recommendations,
        isLoading: loadingRecommendations,
        error: errorRecommendations,
    } = useGetRecommendationsQuery({ movieId, list: '/recommendations' });
    const isMovieFavorited = true;
    const isMovieWatchListed = true;
    const trailer = data?.videos?.results?.find(
        (video) => video.type === 'Trailer' && video.site === 'YouTube',
    );
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    if (error) {
        return (
            <Box>
                <RouterLink to="/">
                    something has gone wrong, go back
                </RouterLink>
            </Box>
        );
    }
    const addToFavorites = () => {};
    const addToWatchList = () => {};
    return (
        <Grid
            container
            sx={{
                margin: '10px 0 ',
                [theme.breakpoints.down('sm')]: {
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                },
            }}
        >
            <Grid size={{ sm: 12, lg: 6, xl: 5 }}>
                <Box
                    component="img"
                    sx={{
                        borderRadius: '20px',
                        boxShadow: '0.5em 1em 1em rgb(64,64,70)',
                        width: '80%',

                        [theme.breakpoints.down('md')]: {
                            // display: 'block',
                            margin: '0 auto',
                            width: '50%',
                            // height: '350px',
                        },

                        [theme.breakpoints.down('sm')]: {
                            // display: 'block',
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
            <Grid direction="column" size={{ lg: 6 }}>
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
                    <Box display="flex" justifyContent="center" align="center">
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
                    sx={{
                        margin: '10px 0',
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                        gap: '10px',
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
                                textDecoration: 'none',
                                padding: '0.5rem 1rem',
                                border: '1px solid grey',
                                borderRadius: '20px',
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
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ marginTop: '10px' }}
                >
                    Overview
                </Typography>
                <Typography sx={{ marginBottom: '2rem' }}>
                    {data?.overview}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Top Cast
                </Typography>
                <Grid container spacing={1}>
                    {data &&
                        data.credits?.cast
                            ?.map(
                                (character, i) =>
                                    character.profile_path && (
                                        <Grid
                                            key={i}
                                            size={{ xs: 4, sm: 3, md: 2 }}
                                            component={Link}
                                            to={`/actors/${character.id}`}
                                            sx={{ textDecoration: 'none' }}
                                        >
                                            <Box
                                                component="img"
                                                src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                                                alt={character.name}
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: '7em',
                                                    height: '8em',
                                                    objectFit: 'cover',
                                                    borderRadius: '10px',
                                                }}
                                            />
                                            <Typography color="textPrimary">
                                                {character.name}
                                            </Typography>
                                            <Typography color="textSecondary">
                                                {
                                                    character.character.split(
                                                        '/',
                                                    )[0]
                                                }
                                            </Typography>
                                        </Grid>
                                    ),
                            )
                            .slice(0, 6)}
                </Grid>
                <Grid container sx={{ marginTop: '2rem' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            gap: '1rem',
                            width: '100%',
                            [theme.breakpoints.down('lg')]: {
                                flexDirection: 'row',
                            },
                            [theme.breakpoints.down('md')]: {
                                flexDirection: 'column',
                            },
                        }}
                    >
                        <Grid
                            size={{ sm: 6 }}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                                // [theme.breakpoints.down('sm')]: {
                                //     flexDirection: 'column',
                                // },
                            }}
                        >
                            <ButtonGroup
                                // sx={{ width: '100%' }}
                                size="medium"
                                variant="outlined"
                            >
                                <Tooltip title="Go to the official website ">
                                    <Button
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={data?.homepage}
                                        endIcon={<Language />}
                                    >
                                        Website
                                    </Button>
                                </Tooltip>
                                <Tooltip title="Go to IMDB website ">
                                    <Button
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={`https://www.imdb.com/title/${data?.imdb_id}`}
                                        endIcon={<MovieOutlined />}
                                    >
                                        IMDB
                                    </Button>
                                </Tooltip>
                                <Tooltip title="Watch the official trailer">
                                    <Button
                                        // href="#"
                                        endIcon={<Theaters />}
                                        onClick={() => setOpen(true)}
                                    >
                                        Trailer
                                    </Button>
                                </Tooltip>
                            </ButtonGroup>
                        </Grid>
                        <Grid
                            size={{ sm: 6 }}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                                [theme.breakpoints.down('sm')]: {
                                    flexDirection: 'column',
                                },
                            }}
                        >
                            <ButtonGroup size="medium" variant="outlined">
                                <Tooltip
                                    title={
                                        isMovieFavorited
                                            ? 'remove from favorites'
                                            : 'add to favorites'
                                    }
                                >
                                    <Button
                                        onClick={addToFavorites}
                                        endIcon={
                                            isMovieFavorited ? (
                                                <FavoriteBorderOutlined />
                                            ) : (
                                                <Favorite />
                                            )
                                        }
                                    >
                                        {isMovieFavorited
                                            ? 'unFavorite'
                                            : 'Favorite'}
                                    </Button>
                                </Tooltip>
                                <Tooltip
                                    title={
                                        isMovieWatchListed
                                            ? 'Remove from Watchlist'
                                            : 'Add to Watchlist'
                                    }
                                >
                                    <Button
                                        onClick={addToWatchList}
                                        endIcon={
                                            isMovieWatchListed ? (
                                                <Remove />
                                            ) : (
                                                <PlusOne />
                                            )
                                        }
                                    >
                                        {isMovieWatchListed
                                            ? 'Watchlist'
                                            : 'Watchlist'}
                                    </Button>
                                </Tooltip>
                                <Tooltip title="Go to home page">
                                    <Button
                                        endIcon={<ArrowBack />}
                                        sx={{ borderColor: 'primary.main' }}
                                        onClick={() => {}}
                                    >
                                        <Typography
                                            component={Link}
                                            to="/"
                                            color="inherit"
                                            variant="subtitle2"
                                            sx={{ textDecoration: 'none' }}
                                        >
                                            Back
                                        </Typography>
                                    </Button>
                                </Tooltip>
                            </ButtonGroup>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Box marginTop="5rem" width="100%">
                <Typography variant="h3" gutterBottom align="center">
                    You might also like
                </Typography>
                {recommendations ? (
                    <MoviesList movies={recommendations} numberOfMovies={18} />
                ) : (
                    <Box>Sorry nothing was found </Box>
                )}
            </Box>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        width: isSmall ? '90%' : '50%',
                        height: isSmall ? '90%' : '50%',
                        aspectRatio: '16/9',
                    }}
                >
                    {trailer && (
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="Trailer"
                            src={`https://www.youtube.com/embed/${trailer.key}`}
                            allow="autoplay"
                            allowFullScreen
                        />
                    )}
                </Box>
            </Modal>
        </Grid>
    );
};

export default MovieInformation;
