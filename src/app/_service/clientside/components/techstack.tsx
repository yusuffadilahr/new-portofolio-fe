'use client'

import { Box } from "@mui/material";
import { GitHub, Code, Storage, Language, Web, JavascriptOutlined } from "@mui/icons-material";
import { useAppSelector } from "../redux";

export default function TechStackComponent() {
    const themeMode = useAppSelector((state) => state.global.themeMode.mode)
    return (
        <Box className={`w-full ${themeMode === 'dark' ? 'bg-slate-900 text-white' : 'bg-white border text-black'} 
        rounded-2xl p-3 sm:p-4 md:p-5 min-h-[2.5rem] h-fit flex justify-center items-center font-bold`}>
            <Box className="grid grid-cols-4 w-full gap-4 text-center">
                {/* <Box>
                    <ReactIcon sx={{ fontSize: 40, color: '#61dafb' }} />
                    <Typography variant="body2">React</Typography>
                </Box> */}
                <Box>
                    <GitHub sx={{ fontSize: 40, color: '#333' }} />
                </Box>
                <Box>
                    <Code sx={{ fontSize: 40, color: '#61dafb' }} />
                </Box>
                <Box>
                    <Storage sx={{ fontSize: 40, color: '#4caf50' }} />
                </Box>
                <Box>
                    <Language sx={{ fontSize: 40, color: '#ff5722' }} />
                </Box>
                <Box>
                    <Web sx={{ fontSize: 40, color: '#1976d2' }} />
                </Box>
                <Box>
                    <JavascriptOutlined sx={{ fontSize: 40, color: '#1976d2' }} />
                </Box>
            </Box>
        </Box>
    );
}
