'use client'

import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import * as React from 'react'
import LoadingComponent from "./loading";
import { useAppTheme } from "../../hooks/useapptheme";
import { useInView } from 'react-intersection-observer'

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

const DynamicBodyContact = dynamic(() => import('@/app/contact/_components/bodycontact'), {
    loading: () => <></>
})

export default function BodyLanding() {
    const [clientRendered, setClientRendered] = React.useState(false);
    const { isMobile } = useAppTheme()
    const { ref: refGit, inView: refGitInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    React.useEffect(() => {
        setClientRendered(true)
    }, [])

    if (!clientRendered) return <LoadingComponent />

    return (
        <>
            {clientRendered && (
                <Box className={`w-full space-y-5 pb-10 ${isMobile ? 'hidden' : 'block'}`}>
                    <DynamicTitleLayout title='Introduction'>
                        <DynamicIntroduction />
                    </DynamicTitleLayout>

                    <DynamicTitleLayout title='Tech Stack'>
                        <DynamicTechStack />
                    </DynamicTitleLayout>

                    <DynamicTitleLayout title='Project Experience'>
                        <DynamicProject />
                    </DynamicTitleLayout>

                    <DynamicTitleLayout title='Github History' ref={refGit} inView={refGitInView}>
                        <GithubCalendarComponent />
                    </DynamicTitleLayout>
                  
                    <DynamicTitleLayout title='Contact' ref={refGit} inView={refGitInView}>
                        <DynamicBodyContact pb={0} pt={0}/>
                    </DynamicTitleLayout>
                </Box>
            )}
        </>
    );
}