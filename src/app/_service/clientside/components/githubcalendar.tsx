'use client'

import { Box } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
import { useAppSelector } from "../redux";

export default function GithubCalendarComponent() {
    const theme = useAppSelector((state) => state.global.themeMode.mode)

    const colorTheme = theme === 'dark' ? {
        dark: ['#1e1e1e', '#0e4429', '#006d32', '#26a641', '#39d353']
    } : {
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
    }

    return (
        <Box sx={{
            width: '100%', height: 'fit-content', marginTop: '15px', marginBottom: '15px',
            border: '1px', borderRadius: '25px'
        }}>
            <GitHubCalendar username="yusuffadilahr" theme={colorTheme} />
        </Box>
    )
}