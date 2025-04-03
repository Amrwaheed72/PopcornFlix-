import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ActorsPage from './pages/ActorsPage';
import MoviesPage from './pages/MoviesPage';
import MovieInfoPage from './pages/MovieInfoPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './ui/Navbar';

const App = () => {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Box sx={{ display: 'flex', height: '100vh' }}>
                    <CssBaseline />
                    <Navbar />
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            marginTop: '80px',
                            padding: '16px',
                            height: 'calc(100% - 80px)',
                            overflow: 'auto',
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<MoviesPage />} />
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
