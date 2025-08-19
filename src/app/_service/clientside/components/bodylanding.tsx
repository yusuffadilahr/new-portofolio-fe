'use client'

import React, { JSX, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Divider,
    IconButton,
    Typography,
    Chip
} from '@mui/material';
import {
    Work,
    School,
    LocationOn,
    CalendarToday,
    Business,
    ArrowBackIos,
    ArrowForwardIos
} from '@mui/icons-material';

import LoadingComponent from './loading';
import { useAppTheme } from '../../hooks/useapptheme';
import TimelineEducation from './timeline';
import TitleLayout from '@/app/_service/clientside/components/titlelayout';
import Introduction from '@/app/_service/clientside/components/introduction';
import ProjectSession from '@/app/_service/clientside/components/projectsession';
import TechStackComponent from '@/app/_service/clientside/components/techstack';
import GithubCalendarComponent from '@/app/_service/clientside/components/githubcalendar';
import BodyContact from '@/app/_service/clientside/components/contact';

// --- Types ---
type ExperienceType = 'work' | 'project_based' | 'education';
type ExperienceStatus = 'current' | 'previous' | 'completed';

type Experience = {
    title: string;
    company: string;
    location: string;
    duration: string;
    type: ExperienceType;
    status: ExperienceStatus;
    description: string;
    technologies: string[];
};

const certifications = [
    'AWS Cloud Practitioner',
    'Google Analytics Certified',
    'Meta React Developer',
    'MongoDB Certified'
];

const experiences: Experience[] = [
    {
        title: 'Frontend Developer',
        company: 'Universitas Terbuka',
        location: 'Tangerang Selatan, Indonesia',
        duration: 'Jan 2025 - Present',
        type: 'work',
        status: 'current',
        description:
            'Frontend Developer building ProMISe Terbuka with Next.js and TypeScript, focusing on UI implementation, performance optimization, SEO Optimization, and modules like Si-BeLa for contract management and tax calculation.',
        technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Material UI', 'Git']
    },
    {
        title: 'Frontend Developer',
        company: 'Combucha Coffee',
        location: 'Bogor, Indonesia',
        duration: 'Jul 2024 - Aug 2024',
        type: 'project_based',
        status: 'previous',
        description:
            'Developed a React-based dashboard to support decision-making for selecting the best coffee, implementing user and admin login flows, and maintaining the application according to data requirements.',
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Git']
    },
    {
        title: 'Full-Stack Web Development Bootcamp',
        company: 'Purwadhika Digital & Technology School',
        location: 'Tangerang Selatan, Indonesia',
        duration: 'Aug 2024 - Jan 2025',
        type: 'education',
        status: 'completed',
        description:
            'Intensive 16-week program covering JavaScript, React, Node.js, databases, and modern web development practices. Graduated with honors.',
        technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express']
    }
];

const getStatusColor = (status: ExperienceStatus) => {
    switch (status) {
        case 'current':
            return '#4caf50';
        case 'previous':
            return '#1976d2';
        case 'completed':
            return '#9c27b0';
        default:
            return '#666';
    }
};

const getStatusText = (status: ExperienceStatus) => {
    switch (status) {
        case 'current':
            return 'Current Position';
        case 'previous':
            return 'Previous Role';
        case 'completed':
            return 'Completed';
        default:
            return '';
    }
};

export default function BodyLanding(): JSX.Element {
    const [clientRendered, setClientRendered] = useState(false);
    const { isMobile } = useAppTheme();

    const [activeStep, setActiveStep] = useState<number>(0);
    const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
    const [canScrollRight, setCanScrollRight] = useState<boolean>(false);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setClientRendered(true);
    }, []);

    const handleScroll = useCallback(() => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const { scrollLeft, scrollWidth, clientWidth } = el;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);

        const cardWidth = isMobile ? 300 : 350;
        const step = Math.round(scrollLeft / cardWidth);
        setActiveStep(Math.min(Math.max(step, 0), experiences.length - 1));
    }, [isMobile]);

    // Keep scroll state in sync on resize/mount
    useLayoutEffect(() => {
        handleScroll();
        const el = scrollContainerRef.current;
        if (!el) return;

        const ro = new ResizeObserver(() => handleScroll());
        ro.observe(el);

        return () => ro.disconnect();
    }, [handleScroll]);

    const scrollTo = useCallback(
        (direction: 'left' | 'right') => {
            const el = scrollContainerRef.current;
            if (!el) return;
            const cardWidth = isMobile ? 300 : 350;
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        },
        [isMobile]
    );

    if (!clientRendered) return <LoadingComponent />;

    return (
        <>
            {clientRendered && (
                <Box className={`w-full space-y-5 pb-10 ${isMobile ? 'hidden' : 'block'} px-3`}>
                    <TitleLayout title="Introduction">
                        <Introduction />
                    </TitleLayout>

                    <TitleLayout title="Latest Project">
                        <ProjectSession />
                        <TechStackComponent />
                    </TitleLayout>

                    <TitleLayout title="Education">
                        <TimelineEducation />
                    </TitleLayout>

                    <TitleLayout title="Github History">
                        <GithubCalendarComponent />
                    </TitleLayout>

                    <TitleLayout title="Contact">
                        <BodyContact />
                    </TitleLayout>

                    <TitleLayout title="Certification & Achievements">
                        <Box display="flex" flexWrap="wrap" gap={1}>
                            {certifications.map((cert, index) => (
                                <Chip
                                    key={index}
                                    label={cert}
                                    sx={{
                                        backgroundColor: '#f0f7ff',
                                        color: '#1976d2',
                                        border: '1px solid #e3f2fd'
                                    }}
                                />
                            ))}
                        </Box>
                    </TitleLayout>

                    <Box>
                        {/* Navigation Controls */}
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                            <Typography variant="body2" color="text.secondary">
                                {experiences.length} experiences • Swipe to explore
                            </Typography>
                            <Box display="flex" gap={1}>
                                <IconButton
                                    size="small"
                                    onClick={() => scrollTo('left')}
                                    disabled={!canScrollLeft}
                                    aria-label="Scroll left"
                                    sx={{
                                        backgroundColor: canScrollLeft ? '#f5f5f5' : 'transparent',
                                        '&:hover': { backgroundColor: canScrollLeft ? '#e0e0e0' : 'transparent' }
                                    }}
                                >
                                    <ArrowBackIos fontSize="small" />
                                </IconButton>
                                <IconButton
                                    size="small"
                                    onClick={() => scrollTo('right')}
                                    disabled={!canScrollRight}
                                    aria-label="Scroll right"
                                    sx={{
                                        backgroundColor: canScrollRight ? '#f5f5f5' : 'transparent',
                                        '&:hover': { backgroundColor: canScrollRight ? '#e0e0e0' : 'transparent' }
                                    }}
                                >
                                    <ArrowForwardIos fontSize="small" />
                                </IconButton>
                            </Box>
                        </Box>

                        {/* Scrollable Cards Container */}
                        <Box
                            ref={scrollContainerRef}
                            onScroll={handleScroll}
                            sx={{
                                display: 'flex',
                                gap: 2,
                                overflowX: 'auto',
                                overflowY: 'hidden',
                                pb: 2,
                                '&::-webkit-scrollbar': { height: 6 },
                                '&::-webkit-scrollbar-track': { backgroundColor: '#f1f1f1', borderRadius: 3 },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: '#c1c1c1',
                                    borderRadius: 3,
                                    '&:hover': { backgroundColor: '#a1a1a1' }
                                },
                                scrollBehavior: 'smooth'
                            }}
                        >
                            {experiences.map((exp, index) => (
                                <Card
                                    key={index}
                                    elevation={1}
                                    sx={{
                                        minWidth: isMobile ? 280 : 350,
                                        maxWidth: isMobile ? 280 : 350,
                                        height: 'fit-content',
                                        backgroundColor: 'white',
                                        border: '1px solid #e0e0e0',
                                        borderTop: `4px solid ${exp.type === 'work' ? '#1976d2' : '#9c27b0'}`,
                                        '&:hover': { boxShadow: '0 8px 25px rgba(0,0,0,0.15)', transform: 'translateY(-4px)', transition: 'all 0.3s ease' },
                                        position: 'relative',
                                        cursor: 'grab',
                                        '&:active': { cursor: 'grabbing' }
                                    }}
                                >
                                    {/* Status Badge */}
                                    <Box sx={{ position: 'absolute', top: 12, right: 12, zIndex: 1 }}>
                                        <Chip
                                            label={getStatusText(exp.status)}
                                            size="small"
                                            sx={{ backgroundColor: getStatusColor(exp.status), color: 'white', fontSize: '0.7rem', fontWeight: 600 }}
                                        />
                                    </Box>

                                    <CardContent sx={{ p: 2.5 }}>
                                        {/* Header */}
                                        <Box display="flex" alignItems="flex-start" mb={2}>
                                            <Avatar sx={{ backgroundColor: exp.type === 'work' ? '#e3f2fd' : '#f3e5f5', color: exp.type === 'work' ? '#1976d2' : '#9c27b0', width: 45, height: 45, mr: 2 }}>
                                                {exp.type === 'work' ? <Work /> : <School />}
                                            </Avatar>
                                            <Box flex={1}>
                                                <Typography variant="h6" color="text.primary" fontWeight={600} sx={{ fontSize: '1.1rem', lineHeight: 1.2, mb: 0.5 }}>
                                                    {exp.title}
                                                </Typography>
                                                <Box display="flex" alignItems="center">
                                                    <Business sx={{ fontSize: 14, color: '#1976d2', mr: 0.5 }} />
                                                    <Typography variant="body2" color="primary" fontWeight={500} fontSize="0.9rem">
                                                        {exp.company}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>

                                        {/* Duration & Location */}
                                        <Box display="flex" gap={1} mb={2} flexWrap="wrap">
                                            <Chip icon={<CalendarToday />} label={exp.duration} size="small" variant="outlined" sx={{ fontSize: '0.7rem', height: 28, '& .MuiChip-icon': { fontSize: 12 } }} />
                                            <Chip icon={<LocationOn />} label={exp.location} size="small" variant="outlined" sx={{ fontSize: '0.7rem', height: 28, '& .MuiChip-icon': { fontSize: 12 } }} />
                                        </Box>

                                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5, fontSize: '0.85rem', mb: 2, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            {exp.description}
                                        </Typography>

                                        <Divider sx={{ mb: 2 }} />

                                        <Box>
                                            <Typography variant="subtitle2" color="text.primary" gutterBottom fontWeight={600} fontSize="0.8rem">
                                                Technologies:
                                            </Typography>
                                            <Box display="flex" flexWrap="wrap" gap={0.5}>
                                                {exp.technologies.slice(0, 5).map((tech, techIndex) => (
                                                    <Chip key={techIndex} label={tech} size="small" sx={{ backgroundColor: '#f8f9fa', color: '#495057', fontSize: '0.65rem', height: 22, '&:hover': { backgroundColor: '#e9ecef' } }} />
                                                ))}
                                                {exp.technologies.length > 5 && (
                                                    <Chip label={`+${exp.technologies.length - 5}`} size="small" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2', fontSize: '0.65rem', height: 22, fontWeight: 600 }} />
                                                )}
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>

                        <Box display="flex" justifyContent="center" mt={2}>
                            <Box display="flex" gap={0.5}>
                                {experiences.map((_, index) => (
                                    <Box key={index} sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: activeStep === index ? '#1976d2' : '#e0e0e0', transition: 'background-color 0.3s ease' }} />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    );
}
