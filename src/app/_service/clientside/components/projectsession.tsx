'use client'

// import { Box } from "@mui/material";
import { useAppSelector } from "../redux";
import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Image from "next/image";
import Link from "next/link";

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

    return (
        <div className="flex flex-col space-y-3">
            {arrayProjectSession.map((item, index) => (
                <Link href={item.url} target="_blank" key={index}>
                    <Card sx={{
                        maxWidth: '100vw',
                        width: '100%',
                        borderRadius: '15px'
                    }} className={`${theme === 'dark' ? 'bg-slate-950' : 'bg-gray-100'}`}>
                        <CardActionArea>
                            <Image
                                height={500}
                                width={500}
                                src={item.src}
                                alt="Project Image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {item.projectName}
                                </Typography>
                                <Typography variant="body2" fontSize={'12px'} sx={{ color: 'text.secondary' }}>
                                    {item.projectDesc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            ))}
        </div>
    );
}