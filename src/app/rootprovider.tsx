'use client'

import React from "react";
import ThemeProviders from "./themeprovider";
import { Provider } from 'react-redux'
import MakeStore from "./_service/clientside/redux";
import CssBaseline from "@mui/material/CssBaseline";

export default function RootProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={MakeStore}>
            <ThemeProviders>
                <CssBaseline />
                {children}
            </ThemeProviders>
        </Provider>
    );
}