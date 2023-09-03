import { configureStore } from '@reduxjs/toolkit'
import withdrawSlice from '../components/withdrawSlice'

const store = configureStore({
  reducer: {
    withDraw: withdrawSlice
  }
})

export default store