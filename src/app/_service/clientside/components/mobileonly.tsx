'use client'

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useAppSelector } from "../redux";

export default function MobileOnly() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'))
    const themeMode = useAppSelector((state) => state.global.themeMode.mode)
    return (
        <Box className='w-full h-screen justify-center items-center'
            sx={{
                display: isMobile ? 'flex' : 'none'
            }}>
            <Typography variant="h1" sx={{
                color: themeMode === 'dark' ? '#fff' : 'black'
            }}>This content is only available on mobile devices.</Typography>
        </Box>
    );
}