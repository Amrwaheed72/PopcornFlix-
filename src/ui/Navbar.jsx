import {
    AppBar,
    IconButton,
    Toolbar,
    Drawer,
    Button,
    Avatar,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import {
    Menu,
    AccountCircle,
    Brightness4,
    Brightness7,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useStyles from '../components/styles';
const Navbar = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    return (
        <>
            <AppBar position="fixed">
                <Toolbar
                    sx={{
                        height: '80px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginLeft: '240px',
                        [theme.breakpoints.down('sm')]: {
                            marginLeft: '0',
                            flexWrap: 'wrap',
                        },
                    }}
                >
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            edge="start"
                            style={{ outline: 'none' }}
                            onClick={() => {}}
                            sx={{
                                marginRight: theme.spacing(2),
                                [theme.breakpoints.up('sm')]: {
                                    display: 'none',
                                },
                            }}
                        >
                            <Menu />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
