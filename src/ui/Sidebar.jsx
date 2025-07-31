import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useGetGenresQuery } from '../services/TMDB';
import Logo from '../ui/Logo';
import GenreSkeletonsItem from './GenreSkeletonsItem';
import genreIcons from '../assets/genres';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../app/currentGenreOrCategory';
import { useEffect } from 'react';
const Sidebar = ({ setMobileOpen }) => {
    const { genreIdOrCategoryName } = useSelector(
        (state) => state.currentGenreOrCategory,
    );
    useEffect(() => {
        setMobileOpen(false);
    }, [genreIdOrCategoryName]);
    const theme = useTheme();
    const { data, isLoading, error } = useGetGenresQuery();
    const dispatch = useDispatch();
    if (error) {
        return (
            <Box sx={{ padding: 2, color: 'error.main' }}>
                An error has occurred. Please try again later.
            </Box>
        );
    }
    const categories = [
        {
            label: 'Popular',
            value: 'popular',
        },
        {
            label: 'Top Rated',
            value: 'top_rated',
        },
        {
            label: 'Upcoming',
            value: 'upcoming',
        },
    ];
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '10% 0',
                }}
            >
                <Link
                    to="/"
                    style={{
                        textDecoration: 'none',
                        margin: '0 auto',
                    }}
                >
                    <Logo
                        // color="#ff0000"
                        color={
                            theme.palette.mode === 'dark'
                                ? '#FF0000'
                                : '#0561c3'
                        }
                    />
                </Link>
            </Box>
            <Divider />
            <List>
                <ListSubheader>Categories</ListSubheader>
                {categories.map(({ label, value }) => (
                    <Link
                        key={value}
                        to="/"
                        style={{
                            color: theme.palette.text.primary,
                            textDecoration: 'none',
                        }}
                    >
                        <ListItemButton
                            onClick={() =>
                                dispatch(selectGenreOrCategory(value))
                            }
                        >
                            <ListItemIcon>
                                <img
                                    src={genreIcons[label.toLowerCase()]}
                                    alt="hi"
                                    height={30}
                                    style={{
                                        filter:
                                            theme.palette.mode === 'dark'
                                                ? 'invert(1)'
                                                : 'none',
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                <ListSubheader>Genres</ListSubheader>

                {isLoading
                    ? Array.from({ length: 12 }).map((_, index) => (
                          <GenreSkeletonsItem key={index} />
                      ))
                    : data?.genres.map((genre) => (
                          <Link
                              key={genre.id}
                              to="/"
                              style={{
                                  color: theme.palette.text.primary,
                                  textDecoration: 'none',
                              }}
                          >
                              <ListItemButton
                                  onClick={() =>
                                      dispatch(selectGenreOrCategory(genre.id))
                                  }
                              >
                                  <ListItemIcon>
                                      <img
                                          src={
                                              genreIcons[
                                                  genre.name.toLowerCase()
                                              ]
                                          }
                                          alt="hi"
                                          height={30}
                                          style={{
                                              filter:
                                                  theme.palette.mode === 'dark'
                                                      ? 'invert(1)'
                                                      : 'none',
                                          }}
                                      />
                                  </ListItemIcon>
                                  <ListItemText primary={genre.name} />
                              </ListItemButton>
                          </Link>
                      ))}
            </List>
        </>
    );
};

export default Sidebar;
