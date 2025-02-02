'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { Props } from '../interfacepublic';
import { Divider, Drawer, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import WorkIcon from '@mui/icons-material/Work'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../redux';
import { setThemeGlobal } from '../redux/globalstore/reducer';

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children ?? <div />}
        </Slide>
    );
}

export default function HideAppBar(props: Props) {
    const [isOpenSideBar, setIsOpenSideBar] = React.useState<boolean>(false);
    const handleOpenSideBarOpen = () => setIsOpenSideBar(true);
    const handleOpenSideBarClose = () => setIsOpenSideBar(false);
    const modeTheme = useAppSelector((state) => state.global.themeMode.mode)
    console.log(modeTheme, '< apa isinya nih')
    const dispatch = useAppDispatch()
    const router = useRouter();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const isArrMenu = [
        { name: 'Beranda', link: '/', icon: <HomeIcon sx={{ fontSize: '1.2rem' }} /> },
        { name: 'Tentang Saya', link: '/about-us', icon: <InfoIcon sx={{ fontSize: '1.2rem' }} /> },
        { name: 'Kontak', link: '/contact', icon: <WorkIcon sx={{ fontSize: '1.2rem' }} /> },
    ];

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar elevation={0} sx={{ boxShadow: 'none' }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{
                                width: { xs: '10px', sm: '15px' },
                                height: { xs: '10px', sm: '15px' },
                                backgroundColor: 'red',
                                borderRadius: '50%'
                            }} />
                        </Box>

                        {isMobile && (
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenSideBarOpen}>
                                <MenuIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
                            </IconButton>
                        )}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />

            <Drawer open={isOpenSideBar} anchor="right" onClose={handleOpenSideBarClose}>
                <Box sx={{
                    width: { xs: '250px', sm: '300px' },
                    color: 'black',
                    height: '100%',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Typography sx={{
                        fontSize: '1.5rem',
                        marginBottom: '20px'
                    }}>Menu</Typography>

                    {isArrMenu.map((text) => (
                        <ListItem key={text?.name} disablePadding>
                            <ListItemButton sx={{
                                '&:hover': {
                                    backgroundColor: '#9CA3AF',
                                },
                                padding: '10px 20px',
                                margin: '5px 0',
                            }} onClick={() => {
                                router.push(text?.link);
                                setTimeout(() => {
                                    setIsOpenSideBar(false);
                                }, 500);
                            }}>
                                <ListItemIcon>
                                    {text?.icon}
                                </ListItemIcon>
                                <ListItemText primary={text?.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{
                                '&:hover': {
                                    backgroundColor: '#9CA3AF',
                                },
                                padding: '10px 20px',
                                margin: '5px 0',
                            }}
                            onClick={() => {
                                dispatch(setThemeGlobal(modeTheme === 'dark' ? 'light' : 'dark'));
                            }}
                        >
                            <ListItemIcon>
                                {modeTheme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                            </ListItemIcon>
                            <ListItemText primary={modeTheme === 'dark' ? 'Light Mode' : 'Dark Mode'} />
                        </ListItemButton>
                    </ListItem>
                    <Divider sx={{ backgroundColor: 'white', margin: '10px 0' }} />
                </Box>
            </Drawer>
        </React.Fragment>
    );
}
