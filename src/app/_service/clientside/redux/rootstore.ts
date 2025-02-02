import { combineReducers } from '@reduxjs/toolkit'
import globalreducer from './globalstore/reducer'
export const rootstore = combineReducers({
    global: globalreducer
})