'use client';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import * as React from 'react';

export default function PdfViewer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const zoomPluginInstance = zoomPlugin()
    
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
                <div className="w-full h-full shadow-lg border">
                    <Viewer fileUrl="/Yusuf Fadilah Rukmana_Resume.pdf" plugins={[defaultLayoutPluginInstance, zoomPluginInstance]} />
                </div>
            </Worker>
        </div>
    );
}
