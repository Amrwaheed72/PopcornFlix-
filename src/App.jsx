import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ActorsPage from './pages/ActorsPage';
import MoviesPage from './pages/MoviesPage';
import MovieInfoPage from './pages/MovieInfoPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './ui/Navbar';
import useStyles from './components/styles';
const App = () => {
    const theme = createTheme(); // Create a default theme
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Box sx={{ display: 'flex', height: '100%' }}>
                    <CssBaseline />
                    <Navbar />
                    <Box>
                        <Box></Box>
                        <Routes>
                            <Route index path="/" element={<MoviesPage />} />
                            <Route
                                path="/actors/:id"
                                element={<ActorsPage />}
                            />
                            <Route
                                path="/movie/:id"
                                element={<MovieInfoPage />}
                            />
                            <Route
                                path="/profile/:id"
                                element={<ProfilePage />}
                            />
                        </Routes>
                    </Box>
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
