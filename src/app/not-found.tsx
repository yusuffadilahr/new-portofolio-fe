import { Box, Typography } from "@mui/material";

export default function NotFound() {
    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center', maxHeight: '100vh',
            maxWidth: '100vw', width: '100%', height: '100%',
            textAlign: 'center', p: 2
        }}>
            <Typography variant="h5">
                Opss! This page isn&apos;t available yet.<br />
                We&apos;re still working on it.
            </Typography>
        </Box>
    );
}