import { configureStore } from "@reduxjs/toolkit";
import { rootstore } from "./rootstore";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const MakeStore = configureStore({
    reducer: rootstore
})

export type AppDispatch = typeof MakeStore.dispatch
export type RootState = ReturnType<typeof MakeStore.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default MakeStore