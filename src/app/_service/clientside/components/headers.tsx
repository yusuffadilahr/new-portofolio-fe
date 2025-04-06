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
import { Divider, Drawer, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import WorkIcon from '@mui/icons-material/Work'
import Resume from '@mui/icons-material/NoteAlt'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { usePathname, useRouter } from 'next/navigation';
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
    const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false)

    const handleOpenSideBarOpen = () => setIsOpenSideBar(true);
    const handleOpenSideBarClose = () => setIsOpenSideBar(false);
    const handleOpenModal = () => setIsOpenModal(true)
    const handleCloseModal = () => setIsOpenModal(false)

    const modeTheme = useAppSelector((state) => state.global.themeMode.mode)
    const dispatch = useAppDispatch()
    const router = useRouter(); 
    const pathname = usePathname()

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const isArrMenu = [
        { name: 'Beranda', link: '/', icon: <HomeIcon sx={{ fontSize: '1.2rem' }} /> },
        { name: 'Tentang Saya', link: '/about-us', icon: <InfoIcon sx={{ fontSize: '1.2rem' }} /> },
        { name: 'Kontak', link: '/contact', icon: <WorkIcon sx={{ fontSize: '1.2rem' }} /> },
        { name: 'Resume', link: '/resume', icon: <Resume sx={{ fontSize: '1.2rem' }} /> },
    ];

    return (
        <React.Fragment>
            <CssBaseline />
            {isMobile && pathname !== '/resume' ? (
                <>
                    <HideOnScroll {...props}>
                        <AppBar elevation={0} sx={{ boxShadow: 'none' }}>
                            <Toolbar sx={{
                                display: 'flex',
                                backgroundColor: modeTheme === 'dark' ? '#0f172a' : '#fff',
                                justifyContent: 'space-between',
                                borderWidth: modeTheme === 'dark' ? '0px' : '1px',
                                borderRadius: '25px'
                            }}>
                                <Box className='w-full flex gap-2 items-center'>
                                    <Box sx={{ display: 'flex', alignItems: 'center', width: '40px', height: '40px' }}>
                                        <button onClick={() => handleOpenModal()}>
                                            <Image src={'/images/foto-intro.jpeg'} className='object-cover object-[0_40%] w-[40px] h-[40px] rounded-full' width={500} height={500} alt='Profil-logo' />
                                        </button>
                                    </Box>
                                    <h1>Hello, I am Yusuf!</h1>
                                </Box>

                                {isMobile && (
                                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenSideBarOpen}>
                                        <MenuIcon sx={{
                                            fontSize: {
                                                xs: '1.5rem', sm: '2rem',
                                                color: modeTheme === 'dark' ? '#fff' : '#404040'
                                            }
                                        }} />
                                    </IconButton>
                                )}
                            </Toolbar>
                        </AppBar>
                    </HideOnScroll>
                    <Toolbar />
                </>
            ) : ''}

            <Modal open={isOpenModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'fit-content',
                    p: 4,
                    outline: 'none'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '200px', height: '200px' }}>
                        <Image src={'/images/foto-intro.jpeg'} className='object-cover object-[0_40%] w-[200px] h-[200px] rounded-full' width={500} height={500} alt='Profil-logo' />
                    </Box>
                </Box>
            </Modal>

            <Drawer open={isOpenSideBar} anchor="right" onClose={handleOpenSideBarClose}>
                <Box sx={{
                    width: '100%',
                    padding: '20px',
                    backgroundColor: modeTheme === 'dark' ? '#020617' : '#fff'
                }}>
                    <Typography sx={{
                        fontSize: '1rem',
                        fontWeight: 'bold'
                    }}>Menu</Typography>
                </Box>
                <Box sx={{
                    width: { xs: '250px', sm: '300px' },
                    color: 'black',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: modeTheme === 'dark' ? '#020617' : '#fff',
                    height: '100%'
                }}>
                    {isArrMenu.map((text) => (
                        <ListItem key={text?.name} disablePadding>
                            <ListItemButton sx={{
                                '&:hover': {
                                    backgroundColor: '#9CA3AF',
                                },
                                padding: '10px 20px',
                                margin: '5px 0',
                                color: modeTheme === 'dark' ? '#fff' : 'black',
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
                                color: modeTheme === 'dark' ? '#fff' : 'black',
                            }} onClick={() => {
                                dispatch(setThemeGlobal(modeTheme === 'dark' ? 'light' : 'dark'));
                            }}>
                            <ListItemIcon>
                                {modeTheme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                            </ListItemIcon>
                            <ListItemText primary={modeTheme === 'dark' ? 'Light Mode' : 'Dark Mode'} />
                        </ListItemButton>
                    </ListItem>
                    <Divider sx={{ backgroundColor: '#fff', margin: '10px 0' }} />
                </Box>
            </Drawer>
        </React.Fragment>
    );
}