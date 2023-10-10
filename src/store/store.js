import { configureStore } from '@reduxjs/toolkit'
import { autchSlice } from './auth/AuthSlice'


export const store = configureStore({
  reducer: {
    auth: autchSlice.reducer,
  },
})