import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import productReducer from './productSlice'

export const store = configureStore({
    reducer: {
        // Add your reducers here
        user : userReducer,
        product : productReducer
    },
})