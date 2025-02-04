'use client'

import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../redux";
import dynamic from "next/dynamic";
import * as React from 'react'

const RotatingText = dynamic(() => import('./reactbits/rotatingtext'))
// const VariableProximity = dynamic(() => import('./reactbits/varpromixity'))

export default function Introduction() {
    const themeMode = useAppSelector((state) => state.global.themeMode.mode);
    // const containerRef = React.useRef(null);
    return (
        <>
            {/* <Box className={`w-full ${themeMode === 'dark' ? 'bg-slate-900 text-white' : 'bg-white border'} 
            rounded-2xl p-3 sm:p-4 md:p-5 min-h-[2.5rem] h-fit flex justify-center items-center`}>
                <div ref={containerRef} style={{ position: 'relative' }}>
                    <VariableProximity label={`Hi, I am Yusuf Fadilah Rukmana`}
                        className={'variable-proximity-demo'} fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40" containerRef={containerRef}
                        radius={100} falloff='linear' />
                </div>
            </Box> */}
            <Box className={`w-full ${themeMode === 'dark' ? 'bg-slate-900' : 'bg-white border'} 
                rounded-2xl p-3 sm:p-4 md:p-5 min-h-[2.5rem] h-fit flex justify-center items-center flex-col font-bold`}>
                <Box className='flex w-full justify-start items-center'>
                    <Typography className="text-white font-bold text-sm sm:text-base md:text-lg px-1 sm:px-2">As</Typography>
                    <RotatingText texts={['Front End Developer', 'Back End Developer', 'Fullstack Developer']}
                        mainClassName="px-1 sm:px-2 md:px-3 bg-cyan-300 text-black font-bold overflow-hidden 
                        py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-sm sm:text-base md:text-lg"
                        staggerFrom="last" initial={{ y: "100%" }} animate={{ y: 0 }}
                        exit={{ y: "-120%" }} staggerDuration={0.025} splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }} rotationInterval={2000} />
                </Box>
                <Typography className="text-white text-justify"> I am dedicated to creating innovative technology solutions. On this site, you can explore my portfolio and view the projects I have worked on. Additionally, you can read about various aspects of who I am, as well as learn more about my educational and professional background.</Typography>
            </Box>
        </>
    );
}
