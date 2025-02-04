'use client'

import React from "react";
import ThemeProviders from "./themeprovider";
import { Provider } from 'react-redux'
import MakeStore from "./_service/clientside/redux";
import CssBaseline from "@mui/material/CssBaseline";
import Loadinghoc from "./_service/clientside/components/loadinghoc";

export default function RootProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={MakeStore}>
            <ThemeProviders>
                <CssBaseline />
                <Loadinghoc>
                    {children}
                </Loadinghoc>
            </ThemeProviders>
        </Provider>
    );
}