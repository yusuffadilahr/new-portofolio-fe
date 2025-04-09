'use client'

import { Box } from "@mui/material";
import { useAppSelector } from "../redux";
import TypeScriptIcons from "./icons/typescript";
import JavaScriptIcons from "./icons/javascript";
import NodejsIcons from "./icons/nodejs";
import ReactIcons from "./icons/react";
import NextJsIcons from "./icons/nextjs";
import ExpressJsIcons from "./icons/expressjs";
import PrismaIcons from "./icons/prisma";
import MySqlIcons from "./icons/mysql";
import SupabaseIcons from "./icons/supabase";
import ReduxIcons from "./icons/redux";
import Marquee from "react-fast-marquee";

export default function TechStackComponent() {
    const themeMode = useAppSelector((state) => state.global.themeMode.mode)
    return (
        // <Box className={`w-full ${themeMode === 'dark' ? 'bg-slate-900 text-[#fff]' : 'bg-[#fff] border text-black'} 
        // rounded-2xl p-3 sm:p-4 md:p-5 min-h-[2.5rem] h-fit flex justify-center items-center font-bold`}>
        //     <Box className="grid grid-cols-5 w-full gap-4 text-center">
        //         {/* <Box>
        //             <TypeScriptIcons className={'text-sm'} />
        //         </Box>
        //         <Box>
        //             <JavaScriptIcons />
        //         </Box>
        //         <Box>
        //             <NodejsIcons />
        //         </Box>
        //         <Box>
        //             <ReactIcons className={'text-xs'} />
        //         </Box>
        //         <Box>
        //             <NextJsIcons />
        //         </Box>
        //         <Box>
        //             <ExpressJsIcons />
        //         </Box>
        //         <Box>
        //             <PrismaIcons />
        //         </Box>
        //         <Box>
        //             <MySqlIcons />
        //         </Box>
        //         <Box>
        //             <SupabaseIcons />
        //         </Box>
        //         <Box>
        //             <ReduxIcons />
        //         </Box> */}
        //     </Box>
        // </Box>
        <Box className={`w-full ${themeMode === 'dark' ? 'bg-slate-900 text-[#fff]' : 'bg-[#fff] border text-black'} 
        // rounded-2xl p-3 sm:p-4 md:p-5 min-h-[2.5rem] h-fit flex justify-center items-center font-bold`}>
            <Marquee speed={60} gradient={false} direction="left" >
                <div className="flex items-center gap-3 px-2">
                    <TypeScriptIcons className="w-10 h-10" />
                    <JavaScriptIcons className="w-10 h-10" />
                    <NodejsIcons className="w-10 h-10" />
                    <ReactIcons className="w-10 h-10" />
                    <NextJsIcons className="w-10 h-10"/>
                    <ExpressJsIcons className="w-10 h-10"/>
                    <PrismaIcons className="w-10 h-10"/>
                    <MySqlIcons className="w-10 h-10"/>
                    <SupabaseIcons className="w-10 h-10"/>
                    <ReduxIcons className="w-10 h-10"/>
                </div>
            </Marquee>
        </Box>
    );
}
