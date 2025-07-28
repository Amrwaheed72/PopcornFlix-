import { Search as SearchIcon } from '@mui/icons-material';
import { Box, InputAdornment, TextField, useTheme } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovie } from '../app/currentGenreOrCategory';
const Search = () => {
    const [query, setQuery] = useState('');
    const theme = useTheme();
    const dispatch = useDispatch();
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            dispatch(searchMovie(query));
        }
    };
    return (
        <Box
            sx={{
                [theme.breakpoints.down('sm')]: {
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                },
            }}
        >
            <TextField
                onKeyDown={handleKeyDown}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                variant="standard"
                sx={{
                    [theme.breakpoints.down('sm')]: {
                        marginTop: '-10px',
                        marginBottom: '10px',
                    },
                    color: theme.palette.mode === 'light' && 'black',
                    filter: theme.palette.mode === 'light' && 'invert(1)',
                }}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </Box>
    );
};

export default Search;
