import { configureStore } from '@reduxjs/toolkit'
import expenseReducer from '../types/types'

export const store = configureStore({
  reducer: {
   expense:expenseReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch