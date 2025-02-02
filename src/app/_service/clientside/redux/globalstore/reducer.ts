import { createSlice } from '@reduxjs/toolkit'

const themeMode: { mode: string } = {
    mode: 'light',
}

const globalReducer = createSlice({
    name: 'global',
    initialState: {
        themeMode
    },
    reducers: {
        setThemeGlobal: (state, action) => {
            state.themeMode.mode = action.payload
        }
    }
})

export const {
    setThemeGlobal
} = globalReducer.actions
export default globalReducer.reducer