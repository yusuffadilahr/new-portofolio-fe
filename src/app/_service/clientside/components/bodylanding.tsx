'use client'

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useAppSelector } from "../redux";
import dynamic from "next/dynamic";

const GithubCalendarComponent = dynamic(() => import('./githubcalendar'))
const DynamicIntroduction = dynamic(() => import('./introduction'))
const DynamicTechStack = dynamic(() => import('./techstack'))
const DynamicProject = dynamic(()=> import('./projectsession'))

export default function BodyLanding() {
    const themeMode = useAppSelector((state) => state.global.themeMode.mode)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <Box className={`w-full space-y-5 pb-10 ${isMobile ? 'hidden' : 'block'}`}>
            <Box className='space-y-3'>
                <Typography className={`text-xl ${themeMode === 'dark' ? 'text-white' : 'text-black'} font-bold`}>Introduction</Typography>
                <DynamicIntroduction />
            </Box>
            <Box className='space-y-3'>
                <Typography className={`text-xl ${themeMode === 'dark' ? 'text-white' : 'text-black'} font-bold`}>Tech Stack</Typography>
                <DynamicTechStack />
            </Box>
            <Box className='space-y-3'>
                <Typography className={`text-xl ${themeMode === 'dark' ? 'text-white' : 'text-black'} font-bold`}>Project Experience</Typography>
                <DynamicProject />
            </Box>
            <Box className='space-y-3'>
                <Typography className={`text-xl ${themeMode === 'dark' ? 'text-white' : 'text-black'} font-bold`}>Github History</Typography>
                <GithubCalendarComponent />
            </Box>
        </Box>
    );
}