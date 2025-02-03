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
            {/* <Box sx={{ width: 'fit-content', display: 'flex' }}>
                <Typography sx={{ display: 'flex' }}>Welcome, </Typography>
                <Typography sx={{
                    width: 'fit-content', display: 'flex', backgroundColor: modeTheme === 'dark' ? 'darkblue' : 'violet',
                    height: 'fit-content', borderRadius: '25px', paddingRight: '10px', paddingLeft: '10px', marginLeft: '2px'
                }}>Dude!</Typography>
            </Box> */}
            <Box className="w-full min-h-[350px] h-fit rounded-xl relative">
                <Box className="absolute inset-0 flex justify-center p-4 items-center">
                    <Box className='w-52 h-52 bg-gradient-to-tr from-white via-sky-400 to-blue-600 rounded-full z-0'></Box>
                </Box>
                {/* <Box className="absolute inset-0 flex justify-start p-4 top-10">
                    <Box className='w-20 h-20 bg-blue-600 rounded-full z-0'></Box>
                </Box> */}
                <Box className="w-full min-h-[350px] h-fit sm:h-[350px] rounded-xl relative">
                    <Image height={500} width={500}
                        src='/images/foto-intro.png'
                        priority alt="Profile Picture"
                        className="h-full w-full z-40 absolute object-cover object-top"
                    />
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