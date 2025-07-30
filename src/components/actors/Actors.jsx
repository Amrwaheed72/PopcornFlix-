import { Link, useNavigate, useParams } from 'react-router-dom';
import {
    useGetActorQuery,
    useGetMoviesByActorIdQuery,
} from '../../services/TMDB';
import {
    Box,
    Button,
    Grid,
    Tooltip,
    Typography,
    useTheme,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import MoviesList from '../movies/MoviesList';
import { useState } from 'react';
import Pagination from '../../ui/Pagination';

const Actors = () => {
    const [page, setPage] = useState(1);
    const { actorId } = useParams();
    const { data, isLoading, error } = useGetActorQuery(actorId);
    const {
        data: actorMovies,
        isLoading: isLoadingMovies,
        error: errorMovies,
    } = useGetMoviesByActorIdQuery({ actorId, page });
    const theme = useTheme();
    const navigate = useNavigate();
    if (error) {
        return (
            <Box>
                <RouterLink to="/">
                    something has gone wrong, go back
                </RouterLink>
            </Box>
        );
    }
    return (
        <>
            <Grid
                container
                spacing={3}
                // sx={{
                //     margin: '10px 0 ',
                //     [theme.breakpoints.down('sm')]: {
                //         flexDirection: 'column',
                //         flexWrap: 'wrap',
                //     },
                // }}
            >
                <Grid size={{ sm: 12, lg: 5, xl: 4 }}>
                    <Box
                        component="img"
                        sx={{
                            borderRadius: '20px',
                            boxShadow: '0.5em 1em 1em rgb(64,64,70)',
                            maxWidth: '90%',
                            objectFit: 'cover',

                            [theme.breakpoints.down('md')]: {
                                // display: 'block',
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
                            data?.profile_path
                                ? `https://image.tmdb.org/t/p/w500/${data.profile_path}`
                                : 'https://via.placeholder.com/500x750'
                        }
                        alt={data?.title}
                    />
                </Grid>
                <Grid
                    size={{ lg: 7, xl: 8 }}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Typography variant="h2" gutterBottom>
                        {data?.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Born: {new Date(data?.birthday).toDateString()}
                    </Typography>
                    <Typography
                        variant="body1"
                        align="justify"
                        component="p"
                        gutterBottom
                    >
                        {data?.biography || 'no biography yet...'}
                    </Typography>
                    <Box
                        marginTop="2rem"
                        display="flex"
                        justifyContent="space-around"
                    >
                        <Tooltip title="go to imdb page">
                            <Button
                                variant="contained"
                                color="primary"
                                target="_blank"
                                href={`https://www.imdb.com/name/${data?.imdb_id}`}
                            >
                                IMDB
                            </Button>
                        </Tooltip>
                        <Tooltip title="go back">
                            <Button
                                startIcon={<ArrowBack />}
                                variant="outlined"
                                color="primary"
                                onClick={() => navigate(-1)}
                            >
                                Back
                            </Button>
                        </Tooltip>
                    </Box>
                </Grid>
            </Grid>
            <Box margin="2rem 0">
                <Typography variant="h2" gutterBottom align="center">
                    Movies
                </Typography>
                {actorMovies && (
                    <MoviesList movies={actorMovies} numberOfMovies="12" />
                )}
                <Pagination
                    page={page}
                    setPage={setPage}
                    totalPages={actorMovies?.total_pages}
                />
            </Box>
        </>
    );
};

export default Actors;
