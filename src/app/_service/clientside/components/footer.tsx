'use client'
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../redux";

export default function Footer() {
    const themeMode = useAppSelector((state) => state.global.themeMode.mode)
    return (
        <Box sx={{
            width: '100%', height: 'fit-content',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
        }} className='py-5'>
            <Typography variant="body2" fontSize='12px'
            sx={{
                color: themeMode === 'dark' ? '#fff' : '#404040'
            }}>
                &copy; Yusuf Fadilah Rukmana 2025
            </Typography>
        </Box>
    );
}