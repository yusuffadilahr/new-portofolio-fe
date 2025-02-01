import React from "react";

export interface Props {
    window?: () => Window;
    children?: React.ReactElement<unknown>;
}