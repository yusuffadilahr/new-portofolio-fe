import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';

export default function TimelineEducation() {
    const educationArray = [
        { education: 'SMAN 1 Tajurhalang', year: '2018' },
        { education: 'Universitas Pakuan', year: '2023' },
        { education: 'Purwadhika Technology School', year: '2024' },
    ]

    return (
        <Timeline position="alternate" >
            {educationArray?.map((item, index) => {
                return (
                    <TimelineItem key={index} position='right'>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            {new Date(item?.year).getFullYear()}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="body2" fontSize={'12px'} component="span">
                                {item?.education}
                            </Typography>
                            <Typography fontSize={'12px'} sx={{
                                color: 'gray'
                            }}>{new Date(item?.year).getFullYear()}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                )
            })}
        </Timeline>
    );
}
