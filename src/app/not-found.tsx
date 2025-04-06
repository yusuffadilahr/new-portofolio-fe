import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center', maxHeight: '100vh',
            maxWidth: '100vw', width: '100%', height: '100%',
            textAlign: 'center', p: 2, flexDirection: 'column'
        }}>
            <Typography variant="h5">
                Opss! This page isn&apos;t available yet.<br />
                We&apos;re still working on it.
            </Typography>
            <Link href='/'>
                <Button variant="contained" sx={{
                    mt: 2,
                    textTransform: 'none',
                    borderRadius: '10px'
                }} size="small">
                    Back to home
                </Button>
            </Link>
        </Box>
    );
}