import { useMediaQuery, useTheme } from "@mui/material"
import { useAppSelector } from "../clientside/redux"

export const useAppTheme = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'))
    const themeMode = useAppSelector((state) => state.global.themeMode.mode)

    return {
        themeMode,
        theme,
        isMobile
    }
}