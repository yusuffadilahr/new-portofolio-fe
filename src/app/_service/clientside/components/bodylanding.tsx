'use client'

import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import * as React from 'react'
import LoadingComponent from "./loading";
import { useAppTheme } from "../../hooks/useapptheme";
import TimelineEducation from "./timeline";

const GithubCalendarComponent = dynamic(() => import('./githubcalendar'), {
    loading: () => <></>
})
const DynamicIntroduction = dynamic(() => import('./introduction'), {
    loading: () => <></>
})
const DynamicTechStack = dynamic(() => import('./techstack'), {
    loading: () => <></>
})
const DynamicProject = dynamic(() => import('./projectsession'), {
    loading: () => <></>
})

const DynamicTitleLayout = dynamic(() => import('./titlelayout'), {
    loading: () => <></>
})

const DynamicBodyContact = dynamic(() => import('./contact'), {
    loading: () => <></>
})

export default function BodyLanding() {
    const [clientRendered, setClientRendered] = React.useState(false);
    const { isMobile } = useAppTheme()

    React.useEffect(() => {
        setClientRendered(true)
    }, [])

    if (!clientRendered) return <LoadingComponent />

    return (
        <>
            {clientRendered && (
                <Box className={`w-full space-y-5 pb-10 ${isMobile ? 'hidden' : 'block'} px-3`}>
                    <DynamicTitleLayout title='Introduction'>
                        <DynamicIntroduction />
                    </DynamicTitleLayout>

                    <DynamicTitleLayout title='Latest Project'>
                        <DynamicProject />
                        <DynamicTechStack />
                    </DynamicTitleLayout>

                    <DynamicTitleLayout title='Education'>
                        <TimelineEducation />
                    </DynamicTitleLayout>

                    <DynamicTitleLayout title='Github History'>
                        <GithubCalendarComponent />
                    </DynamicTitleLayout>

                    <DynamicTitleLayout title='Contact'>
                        <DynamicBodyContact />
                    </DynamicTitleLayout>
                </Box>
            )}
        </>
    );
}