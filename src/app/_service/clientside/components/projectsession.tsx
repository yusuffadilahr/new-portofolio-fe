'use client'

import { Box } from "@mui/material";
import { useAppSelector } from "../redux";

export default function ProjectSession() {
    const theme = useAppSelector((state) => state.global.themeMode.mode)
    return (
        <Box className={`w-full h-fit min-h-10 flex py-5 p-2 rounded-2xl
            ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white border border-gray-200'}
        `}>

        </Box>
    );
}