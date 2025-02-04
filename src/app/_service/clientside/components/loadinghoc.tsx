'use client'
import React from "react";

export default function Loadinghoc({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    if (isLoading) return (
        <div className="w-full h-screen flex justify-center items-center bg-black">
            <img src="https://cdn.dribbble.com/users/227277/screenshots/5414281/loader-black.gif" alt="loading" />
        </div>
    )

    return (
        <>
            {children}
        </>
    );
}