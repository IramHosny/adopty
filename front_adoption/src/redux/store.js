import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import catSlice from './catSlice'
import dogSlice from './dogSlice'
import veterinarianSlice from './veterinarianSlice'
import commentSlice from './commentSlice'
import questionSlice from './questionSlice'




export const store = configureStore({
  reducer: {
    user : userSlice,
    cat : catSlice,
    dog:dogSlice,
 veterinarian :veterinarianSlice,
 question: questionSlice,
 comment: commentSlice,
  },
})