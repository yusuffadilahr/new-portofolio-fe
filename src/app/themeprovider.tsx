'use client'

import { createTheme } from "@mui/material";
import React from "react";
import { useAppSelector } from "./_service/clientside/redux";
import { ThemeProvider } from "@emotion/react";

export default function ThemeProviders({ children }: { children: React.ReactNode }) {
    const checkedMode = useAppSelector((state) => state.global.themeMode.mode)

    const theme = createTheme({
        palette: {
            mode: checkedMode === 'dark' ? 'dark' : 'light',
            background: {
                default: checkedMode === 'dark' ? '#020617' : '#fff'
            },
            text: {
                primary: checkedMode === 'dark' ? 'white' : '#020617'
            }
        },
    })
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}