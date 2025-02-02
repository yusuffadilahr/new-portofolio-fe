'use client'
import { Box, Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useAppSelector } from "../redux";
import dynamic from "next/dynamic";

const GithubCalendarComponent = dynamic(() => import('./githubcalendar'))

export default function BodyPortofolio() {
    const modeTheme = useAppSelector((state) => state.global.themeMode.mode)
    const theme = useTheme();
    const isTabletMode = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box sx={{ width: '100%', display: isTabletMode ? 'none' : 'flex', flexDirection: 'column', minHeight: '100vh', height: 'fit-content' }}>
            <Box sx={{ width: 'fit-content', display: 'flex' }}>
                <Typography sx={{ display: 'flex' }}>Welcome, </Typography>
                <Typography sx={{
                    width: 'fit-content', display: 'flex', backgroundColor: modeTheme === 'dark' ? 'darkblue' : 'violet',
                    height: 'fit-content', borderRadius: '25px', paddingRight: '10px', paddingLeft: '10px', marginLeft: '2px'
                }}>Dude!</Typography>
            </Box>
            <Box sx={{ paddingBottom: '10px', paddingTop: '10px' }}>
                <Card sx={{
                    width: { xs: '100%', sm: '100%' }, borderRadius: '15px', overflow: 'hidden',
                    display: isTabletMode ? 'none' : 'block', boxShadow: 'none'
                }}>
                    <CardMedia component="img" height="200"
                        image="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"
                        alt="Profile Picture" />
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                            John Doe
                        </Typography>
                        {/* Deskripsi atau perkenalan */}
                        <Typography variant="body2" color="text.secondary">
                            Frontend Developer. Passionate about creating beautiful user experiences.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box sx={{ width: '100%', paddingTop: '5px' }}>
                <Typography sx={{ width: '100%', height: 'fit-content', fontSize: '20px', fontWeight: 'bold' }}>Introduction</Typography>
                <Typography sx={{ fontSize: '13px', textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit placeat laborum excepturi, deleniti at illum sunt accusamus rerum facere. Reprehenderit voluptates placeat saepe illum perferendis impedit veritatis ducimus pariatur nisi.</Typography>
            </Box>
            <Box sx={{ width: '100%', paddingTop: '15px' }}>
                <Typography sx={{ width: '100%', height: 'fit-content', fontSize: '20px', fontWeight: 'bold' }}>Education</Typography>
                <Typography sx={{ fontSize: '13px', textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit placeat laborum excepturi, deleniti at illum sunt accusamus rerum facere. Reprehenderit voluptates placeat saepe illum perferendis impedit veritatis ducimus pariatur nisi.</Typography>
            </Box>
            <Box sx={{ width: '100%', paddingTop: '15px' }}>
                <Typography sx={{ width: '100%', height: 'fit-content', fontSize: '20px', fontWeight: 'bold' }}>Work Experience</Typography>
                <Typography sx={{ fontSize: '13px', textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit placeat laborum excepturi, deleniti at illum sunt accusamus rerum facere. Reprehenderit voluptates placeat saepe illum perferendis impedit veritatis ducimus pariatur nisi.</Typography>
            </Box>
            <Box sx={{ width: '100%', paddingTop: '15px' }}>
                <Typography sx={{ width: '100%', height: 'fit-content', fontSize: '20px', fontWeight: 'bold' }}>Portofolio</Typography>
                <Typography sx={{ fontSize: '13px', textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit placeat laborum excepturi, deleniti at illum sunt accusamus rerum facere. Reprehenderit voluptates placeat saepe illum perferendis impedit veritatis ducimus pariatur nisi.</Typography>
            </Box>
            <GithubCalendarComponent />
        </Box>
    );
}