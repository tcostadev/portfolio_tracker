import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import movementReducer from '../features/movements/movementSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movements: movementReducer,
  },
})
