import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { createContext, useContext, useMemo, useState } from 'react';

export const ColorModeContext = createContext();

const ToggleColorModeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
                components: {
                    MuiCssBaseline: {
                        styleOverrides: {
                            body: {
                                scrollbarColor:
                                    mode === 'dark' ? '#888 #000' : '#ccc #fff',
                                '&::-webkit-scrollbar': {
                                    width: '12px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background:
                                        mode === 'dark' ? '#000' : '#f1f1f1',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor:
                                        mode === 'dark' ? '#666' : '#888',
                                    borderRadius: '6px',
                                    border: '3px solid transparent',
                                    backgroundClip: 'content-box',
                                },
                                '&::-webkit-scrollbar-thumb:hover': {
                                    backgroundColor:
                                        mode === 'dark' ? '#888' : '#555',
                                },
                            },
                        },
                    },
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
            <CssBaseline />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
};

const useToggleMode = () => {
    const context = useContext(ColorModeContext);
    if (context === undefined)
        throw new Error('context was used outside provider');
    return context;
};

export { ToggleColorModeProvider, useToggleMode };
