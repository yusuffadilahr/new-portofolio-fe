import { Box, Typography } from "@mui/material";
import { useAppTheme } from "../../hooks/useapptheme";
import * as React from 'react'

export default function TitleLayout({
    children,
    title = 'Title Layout',
    ref,
    inView
}: {
    children: React.ReactNode
    title: string
    ref?: React.Ref<HTMLDivElement>
    inView?: boolean
}) {
    const { themeMode } = useAppTheme()
    return (
        <Box className={`space-y-3 ${inView ? 'animate-fade-right' : ''}`} ref={ref}>
            <Typography variant="body2" fontSize={'16px'}
                fontWeight={600} sx={{ color: themeMode === 'dark' ? '#fff' : '#000' }}>{title}</Typography>
            {children}
        </Box>
    );
}