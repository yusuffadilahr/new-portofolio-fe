'use client'

import { Box } from "@mui/material";
import GitHubCalendar from "react-github-calendar";

export default function GithubCalendarComponent() {
    return (
        <Box sx={{ width: '100%', height: 'fit-content', marginTop: '15px', marginBottom: '15px' }}>
            <GitHubCalendar username="yusuffadilahr" />
        </Box>
    );
}