'use client'

import { useAppSelector } from "../redux";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Alert } from "@mui/material";
// import Autoplay from "embla-carousel-autoplay"

export default function ProjectSession() {
    const theme = useAppSelector((state) => state.global.themeMode.mode)

    const arrayProjectSession = [
        {
            src: '/images/clean-n-click.png', projectName: 'Clean & Click Laundry App',
            projectDesc: 'Clean & Click Laundry App',
            projectDate: new Date('2025-01-25'),
            url: 'https://clean-n-click-application.vercel.app/'
        },
        {
            src: '/images/ticket-box.png', projectName: 'Ticket Box Web App',
            projectDesc: 'Ticket Box Web App',
            projectDate: new Date('2024-12-15'),
            url: 'https://ticket-box-web-app.vercel.app/'
        },
        {
            src: '/images/sondir.png', projectName: 'Sondir Boring Jakarta',
            projectDesc: 'Sondir Boring Jakarta',
            projectDate: new Date('2024-12-15'),
            url: 'https://sondirboring.com/'
        },
    ]

    // const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

    return (
        <React.Fragment>
            <Carousel className="w-full max-w-[100vw]">
                <CarouselContent>
                    {arrayProjectSession.map((item, index) => (
                        <CarouselItem key={index}>
                            <Link href={item.url} target="_blank">
                                <Card className="w-full max-w-[100vw] h-fit">
                                    <div className="relative">
                                        <Image width={500} height={500} className="w-full h-[200px] object-cover rounded-xl"
                                            alt="Project Image" src={item.src} />
                                        {/* <div className="absolute inset-0 flex justify-center items-end py-5">
                                            <div className="bg-red-200 px-4 rounded-xl">
                                                <Typography variant="body2">{item.projectName}</Typography>
                                            </div>
                                        </div> */}
                                    </div>
                                </Card>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <Alert severity="info" sx={{
                bgcolor: theme === 'dark' ? '#00B8D914' : '',
                borderRadius: '10px',
                py: 0,
                fontSize: '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                Swipe left or right to explore more projects
            </Alert>
        </React.Fragment>
    );
}