'use client'
import { Box, /*Card, CardContent, CardMedia, */Typography, useMediaQuery, useTheme } from "@mui/material";
// import { useAppSelector } from "../redux";
import dynamic from "next/dynamic";
import Image from "next/image";

const GithubCalendarComponent = dynamic(() => import('./githubcalendar'))

export default function BodyPortofolio() {
    // const modeTheme = useAppSelector((state) => state.global.themeMode.mode)
    const theme = useTheme();
    const isTabletMode = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box sx={{ width: '100%', display: isTabletMode ? 'none' : 'flex', flexDirection: 'column', minHeight: '100vh', height: 'fit-content' }}>
            <Box className="w-full h-fit z-40 relative">
                <Image height={500} width={500}
                    src='/images/foto-intro.png'
                    priority alt="Profile Picture"
                    className="h-full w-full z-40 object-cover object-top"
                />
                <Box className="w-full inset-0 flex justify-center absolute items-center">
                    <Box className='w-80 h-80 -z-50 bg-gradient-to-t from-white via-sky-500 to-blue-700 rounded-full' />
                </Box>
            </Box>
            <Box sx={{ width: '100%', paddingTop: '5px' }}>
                <Typography sx={{ width: '100%', height: 'fit-content', fontSize: '20px', fontWeight: 'bold' }}>Introduction</Typography>
                <Typography sx={{ fontSize: '13px', textAlign: 'justify' }}>Hello,<span className="bg-blue-500 px-2 rounded-full">I&apos;m Yusuf,</span> a Computer Science graduate with a strong passion for software development. I am dedicated to creating innovative technology solutions. On this site, you can explore my portfolio and view the projects I have worked on. Additionally, you can read about various aspects of who I am, as well as learn more about my educational and professional background.</Typography>
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