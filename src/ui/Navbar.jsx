import {
    AppBar,
    IconButton,
    Toolbar,
    Drawer,
    Button,
    Avatar,
    useMediaQuery,
} from '@mui/material';
import {
    Menu,
    AccountCircle,
    Brightness4,
    Brightness7,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');
    const isAuthenticated = true;
    const drawerWidth = 240;
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
                            marginLeft: 0,
                            flexWrap: 'wrap',
                        },
                    }}
                >
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={() => setMobileOpen((prev) => !prev)}
                            sx={{
                                mr: 2,
                                [theme.breakpoints.up('sm')]: {
                                    display: 'none',
                                },
                                outline: 'none',
                            }}
                        >
                            <Menu />
                        </IconButton>
                    )}
                    <IconButton
                        color="inherit"
                        sx={{ ml: 1 }}
                        onClick={() => {}}
                    >
                        {theme.palette.mode === 'dark' ? (
                            <Brightness7 />
                        ) : (
                            <Brightness4 />
                        )}
                    </IconButton>
                    {!isMobile && 'search here......'}
                    <div>
                        {!isAuthenticated ? (
                            <Button color="inherit" onClick={() => {}}>
                                Login <AccountCircle />
                            </Button>
                        ) : (
                            <Button
                                sx={{
                                    '&:hover': {
                                        color: 'white !important',
                                        textDecoration: 'none',
                                    },
                                }}
                                color="inherit"
                                component={Link}
                                to="/profile/:id"
                                onClick={() => {}}
                            >
                                {!isMobile && <>My Movies </>}
                                <Avatar
                                    sx={{ width: 30, height: 30 }}
                                    alt="Profile"
                                    src="/Amr.jpg"
                                />
                            </Button>
                        )}
                    </div>
                    {isMobile && 'Search here......'}
                </Toolbar>
            </AppBar>
            <div>
                <nav>
                    {isMobile ? (
                        <Drawer
                            variant="temporary"
                            anchor="right"
                            open={mobileOpen}
                            onClose={() => setMobileOpen((prev) => !prev)}
                            sx={{
                                '& .MuiDrawer-paper': {
                                    width: drawerWidth,
                                    backgroundColor:
                                        theme.palette.background.paper,
                                },
                                '& .MuiBackdrop-root': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                },
                            }}
                            ModalProps={{ keepMounted: true }}
                        >
                            <Sidebar setMobileOpen={setMobileOpen} />
                        </Drawer>
                    ) : (
                        <Drawer
                            sx={{
                                width: drawerWidth,
                                '& .MuiDrawer-paper': {
                                    width: drawerWidth,
                                    backgroundColor:
                                        theme.palette.background.paper,
                                },
                            }}
                            variant="permanent"
                            open
                        >
                            <Sidebar setMobileOpen={setMobileOpen} />
                        </Drawer>
                    )}
                </nav>
            </div>
        </>
    );
};

export default Navbar;
