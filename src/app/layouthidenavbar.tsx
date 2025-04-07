'use client'
import { usePathname } from "next/navigation";
import * as React from "react";

export default function HideNavbarLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    return (
        <section className={`${pathname.startsWith('/resume') ? 'pt-0 px-0' : 'pt-5 px-2'}`}>
            {children}
        </section>
    );
}