import { useSelector } from 'react-redux';
import { userSelector } from '../../app/UserSlice';
import { Box, Button, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useGetListQuery } from '../../services/TMDB';
import RatedCards from '../../ui/RatedCards';
import { useEffect } from 'react';

const Profile = () => {
    const { user } = useSelector(userSelector);
    const { data: favMovies, refetch: refetchFavorites } = useGetListQuery({
        listName: 'favorite/movies',
        accountId: user.id,
        sessionId: localStorage.getItem('session_id'),
        page: 1,
    });
    const { data: watchlistMovies, refetch: refetchWatchlist } =
        useGetListQuery({
            listName: 'watchlist/movies',
            accountId: user.id,
            sessionId: localStorage.getItem('session_id'),
            page: 1,
        });
    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    };
    useEffect(() => {
        (refetchFavorites(), refetchWatchlist());
    }, []);
    return (
        <Box>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h4" gutterBottom>
                    My Profile
                </Typography>
                <Button
                    sx={{ border: '1px solid', borderRadius: '40px' }}
                    color="inherit"
                    onClick={logout}
                >
                    Logout &nbsp; <ExitToApp />
                </Button>
            </Box>
            {!favMovies?.results?.length &&
            !watchlistMovies?.results?.length ? (
                <Typography variant="h5">
                    Add favorites or watchList some movies to see them here!
                </Typography>
            ) : (
                <Box>
                    <RatedCards title="Favorite Movies" data={favMovies} />
                    <RatedCards title="Watchlist" data={watchlistMovies} />
                </Box>
            )}
        </Box>
    );
};

export default Profile;
