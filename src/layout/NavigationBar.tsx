import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import ConstructionIcon from '@mui/icons-material/Construction';
import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

import './NavigationBar.css'


const pages = ['Home', 'About', 'Products', 'Netflix', 'Users'];

const NavigationBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const location = useLocation();
    const [resolution, setResolution] = useState('HD');

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);

    };
    const handleCloseNavMenu = (event: any, page?: string) => {
        setAnchorElNav(null);
    };

    function handleResolutionChange() {
        setResolution((previousResolution) => {
            return previousResolution === 'HD' ? '4K' : 'HD';
        })
    }

    function getClassNameBasedOnSelectedPage(page: string) {
        return `${location.pathname.includes(page.toLowerCase()) ? 'selected' : 'regular'}`;
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <ConstructionIcon fontSize={'large'}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        My Evolving App
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link to={`/${page}`}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <ConstructionIcon fontSize={'large'}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        My Evolving App
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Link to={`/${page.toLowerCase()}`} key={page}
                                  className={getClassNameBasedOnSelectedPage(page)}>
                                <Button
                                    key={page}
                                    onClick={() => handleCloseNavMenu(null, page.toLowerCase())}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Typography variant={'h5'}>Resolution: {resolution}</Typography>
                    <IconButton size={'large'} color={'inherit'} onClick={handleResolutionChange}> 🔄 </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavigationBar;
