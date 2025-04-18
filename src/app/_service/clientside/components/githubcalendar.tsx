'use client'

import { Box } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
import { useAppSelector } from "../redux";

export default function GithubCalendarComponent() {
    const theme = useAppSelector((state) => state.global.themeMode.mode)

    return (
        <Box className={`w-full h-fit min-h-10 flex py-5 p-2 rounded-2xl
            ${theme === 'dark' ? 'bg-slate-900 text-[#fff]' : 'bg-[#fff] border border-gray-200'}
        `}>
            <GitHubCalendar username="yusuffadilahr" colorScheme={`${theme === 'dark' ? 'dark' : 'light'}`} />
        </Box>

    )
}