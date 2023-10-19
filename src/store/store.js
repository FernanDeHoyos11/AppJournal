import { configureStore } from '@reduxjs/toolkit'
import { autchSlice } from './auth/AuthSlice'
import { journalSlice } from './journal/journalSlice'


export const store = configureStore({
  reducer: {
    auth: autchSlice.reducer,
    journal: journalSlice.reducer
  },
})