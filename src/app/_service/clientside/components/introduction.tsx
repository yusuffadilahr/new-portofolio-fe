'use client'

import { Box } from "@mui/material";
import { useAppSelector } from "../redux";

export default function Introduction() {
    const themeMode = useAppSelector((state) => state.global.themeMode.mode)
    return (
        <Box className={`w-full ${themeMode === 'dark' ? 'bg-slate-900' : 'bg-white border'} rounded-2xl min-h-10 h-fit`}>

        </Box>
    );
}