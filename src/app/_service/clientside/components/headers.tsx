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
import Image from 'next/image';

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: typeof window !== 'undefined' ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger} timeout={0}
            style={{
                backgroundColor: 'transparent',
                paddingRight: '8px',
                paddingLeft: '8px',
                paddingTop: '8px'
            }}
        >
            {children ?? <div />}
        </Slide>
    );
}

export default function HideAppBar(props: Props) {
    const [isOpenSideBar, setIsOpenSideBar] = React.useState<boolean>(false);
    const handleOpenSideBarOpen = () => setIsOpenSideBar(true);
    const handleOpenSideBarClose = () => setIsOpenSideBar(false);
    const modeTheme = useAppSelector((state) => state.global.themeMode.mode)
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
                    {/* <div className='border'></div> */}
                    <Toolbar sx={{
                        display: 'flex',
                        backgroundColor: modeTheme === 'dark' ? 'black' : 'white',
                        justifyContent: 'space-between',
                        borderWidth: modeTheme === 'dark' ? '0px' : '1px',
                        borderRadius: '25px'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', width: '24px', height: '24px' }}>
                            <Image src={'/images/logo-sementara.png'} width={500} height={500} alt='Profil-logo' />
                        </Box>

                        {isMobile && (
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenSideBarOpen}>
                                <MenuIcon sx={{
                                    fontSize: {
                                        xs: '1.5rem', sm: '2rem',
                                        color: modeTheme === 'dark' ? 'white' : '#404040'
                                    }
                                }} />
                            </IconButton>
                        )}
                    </Toolbar>
                    {/* <div className='text-white'></div> */}
                </AppBar>
            </HideOnScroll>
            <Toolbar />

            <Drawer open={isOpenSideBar} anchor="right" onClose={handleOpenSideBarClose}>
                <Box sx={{
                    width: '100%',
                    padding: '20px'
                }}>
                    <Typography sx={{
                        fontSize: '1rem',
                        // marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>Menu</Typography>
                </Box>
                <Box sx={{
                    width: { xs: '250px', sm: '300px' },
                    color: 'black',
                    // height: '100%',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
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
                            }} onClick={() => {
                                dispatch(setThemeGlobal(modeTheme === 'dark' ? 'light' : 'dark'));
                            }}>
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