'use client'

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useAppSelector } from "../redux";
import dynamic from "next/dynamic";
import * as React from 'react'
import LoadingComponent from "./loading";

const GithubCalendarComponent = dynamic(() => import('./githubcalendar'))
const DynamicIntroduction = dynamic(() => import('./introduction'))
const DynamicTechStack = dynamic(() => import('./techstack'))
const DynamicProject = dynamic(() => import('./projectsession'))

export default function BodyLanding() {
    const [clientRendered, setClientRendered] = React.useState(false);

    const themeMode = useAppSelector((state) => state.global.themeMode.mode)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'))

    React.useEffect(() => {
        setClientRendered(true)
    }, [])

    if (!clientRendered) return <LoadingComponent />

    return (
        <>
            {clientRendered && (
                <Box className={`w-full space-y-5 pb-10 ${isMobile ? 'hidden' : 'block'}`}>
                    <Box className='space-y-3'>
                        <Typography variant="body2" fontSize={'16px'}
                            fontWeight={600} sx={{ color: themeMode === 'dark' ? '#fff' : '#000' }}>Introduction</Typography>
                        <DynamicIntroduction />
                    </Box>
                    <Box className='space-y-3'>
                        <Typography variant="body2" fontSize={'16px'}
                            fontWeight={600} sx={{ color: themeMode === 'dark' ? '#fff' : '#000' }}>Tech Stack</Typography>
                        <DynamicTechStack />
                    </Box>
                    {/* <Box className='space-y-3'>
                        <Typography variant="body2" fontSize={'16px'}
                            fontWeight={600} sx={{ color: themeMode === 'dark' ? '#fff' : '#000' }}>Work Experience</Typography>
                    </Box> */}
                    <Box className='space-y-3'>
                        <Typography variant="body2" fontSize={'16px'}
                            fontWeight={600} sx={{ color: themeMode === 'dark' ? '#fff' : '#000' }}>Project Experience</Typography>
                        <DynamicProject />
                    </Box>
                    <Box className='space-y-3'>
                        <Typography variant="body2" fontSize={'16px'}
                            fontWeight={600} sx={{ color: themeMode === 'dark' ? '#fff' : '#000' }}>Github History</Typography>
                        <GithubCalendarComponent />
                    </Box>
                </Box>
            )}
        </>
    );
}