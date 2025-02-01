'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { Props } from '../interfacepublic';
import { Divider, Drawer, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import WorkIcon from '@mui/icons-material/Work'
import { useRouter } from 'next/navigation';

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
    const [isOpenSideBar, setIsOpenSideBar] = React.useState<boolean>(false)
    const handleOpenSideBarOpen = () => setIsOpenSideBar(true)
    const handleOpenSideBarClose = () => setIsOpenSideBar(false)
    const router = useRouter()

    const isArrMenu = [
        { name: 'Beranda', link: '/' },
        { name: 'Tentang Saya', link: '/about-us' },
        { name: 'Kontak', link: '/contact' },
    ]
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar elevation={0} sx={{ boxShadow: 'none' }}>
                    <Toolbar sx={{ backgroundColor: '#212121' }}>
                        <Box sx={{ justifyContent: 'space-between', display: 'flex', width: '100%', alignItems: 'center' }}>
                            <Typography variant="h6" component="div">
                                Welcome
                            </Typography>
                            <Box>
                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenSideBarOpen}>
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Drawer open={isOpenSideBar} anchor="right" onClose={handleOpenSideBarClose}>
                <Box sx={{
                    // background: 'linear-gradient(135deg, #6e7bff, #3f51b5)', // Gradasi warna untuk Drawer
                    color: 'black',
                    height: '100%',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Typography sx={{
                        fontSize: '1.5rem',
                        marginBottom: '20px'
                    }}>Menu</Typography>
                    {isArrMenu.map((text, index) => (
                        <ListItem key={text?.name} disablePadding>
                            <ListItemButton sx={{
                                '&:hover': {
                                    backgroundColor: '#4a69ff',
                                },
                                padding: '10px 20px',
                                margin: '5px 0',
                            }} onClick={() => {
                                router.push(text?.link)
                                setTimeout(() => {
                                    setIsOpenSideBar(false)
                                }, 500)
                            }}>
                                <ListItemIcon>
                                    {index === 0 ? <HomeIcon className='text-sm' /> : index === 1 ? <InfoIcon className='text-sm' /> : <WorkIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text?.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <Divider sx={{ backgroundColor: 'white', margin: '10px 0' }} />
                    {/* You can add more items or actions here */}
                </Box>
            </Drawer>
            <Container>
                {/* <Box sx={{ my: 2 }}>
                    {[...new Array(12)].map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    ).join('\n')}
                </Box> */}
            </Container>
        </React.Fragment>
    );
}
