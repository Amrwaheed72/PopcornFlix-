import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    useTheme,
} from '@mui/material';
import Logo from '../ui/Logo';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
const Sidebar = ({ setMobileOpen }) => {
    const theme = useTheme();
    const categories = [
        {
            label: 'Popular',
            value: 'popular',
        },
        {
            label: 'Top Rated',
            value: 'top-rated',
        },
        {
            label: 'Upcoming',
            value: 'upcoming',
        },
    ];
    const demoCategories = [
        {
            label: 'Comedy',
            value: 'comedy',
        },
        {
            label: 'Action',
            value: 'action',
        },
        {
            label: 'Animation',
            value: 'animation',
        },
        {
            label: 'Horror',
            value: 'horror',
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
                    {/* <img
                        src={
                            theme.palette.mode === 'dark'
                                ? '/red.png'
                                : '/blue.png'
                        }
                        alt="popcornflix"
                        style={{
                            width: '100px',
                        }}
                    /> */}
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
                        <ListItem onClick={() => {}}>
                            <ListItemIcon>
                                <img
                                    src="/red.png"
                                    alt="hi"
                                    height={30}
                                    style={{
                                        filter:
                                            theme.palette.mode === 'dark'
                                                ? 'invert(1)'
                                                : 'dark',
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                <ListSubheader>Genres</ListSubheader>
                {demoCategories.map(({ label, value }) => (
                    <Link
                        key={value}
                        to="/"
                        style={{
                            color: theme.palette.text.primary,
                            textDecoration: 'none',
                        }}
                    >
                        <ListItem onClick={() => {}}>
                            <ListItemIcon>
                                <img
                                    src="/red.png"
                                    alt="hi"
                                    height={30}
                                    style={{
                                        filter:
                                            theme.palette.mode === 'dark'
                                                ? 'invert(1)'
                                                : 'dark',
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </>
    );
};

export default Sidebar;
