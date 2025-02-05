import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import('./_service/clientside/components/pdfviewer'), { ssr: false })

export default function Page() {
    return (
        <>
            <PdfViewer />
        </>
    );
}