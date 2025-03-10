'use client'

import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../redux";
import * as React from 'react'

export default function Introduction() {
    const themeMode = useAppSelector((state) => state.global.themeMode.mode);
    return (
        <>
            <Box className={`w-full ${themeMode === 'dark' ? 'bg-slate-900' : 'bg-white border'} 
                rounded-2xl p-3 sm:p-4 md:p-5 min-h-[2.5rem] h-fit flex justify-center items-center flex-col font-bold`}>
                <Typography className="text-white text-justify"> Passionate web developer with experience in HTML, CSS, JavaScript, and TypeScript. Skilled in building responsive web applications using frameworks like ReactJS and NextJS. Continuously improving through personal projects and staying up-to-date with the latest web development trends.</Typography>
            </Box>
        </>
    );
}
