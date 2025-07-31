import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ActorsPage from './pages/ActorsPage';
import MoviesPage from './pages/MoviesPage';
import MovieInfoPage from './pages/MovieInfoPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './ui/Navbar';
import { Provider } from 'react-redux';
import store from './app/store';
import { ToggleColorModeProvider } from './utils/ToggleColorMode';

const App = () => {
    const theme = createTheme();
    return (
        <Provider store={store}>
            <ToggleColorModeProvider>
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
                                    path="/actors/:actorId"
                                    element={<ActorsPage />}
                                />
                                <Route
                                    path="/movie/:movieId"
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
            </ToggleColorModeProvider>
        </Provider>
    );
};

export default App;
