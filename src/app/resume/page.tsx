'use client'

import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import('./_components/pdfviewer'), { ssr: false })

export default function Page() {
    return (
        <>
            <PdfViewer />
        </>
    );
}