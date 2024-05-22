import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import catSlice from './catSlice'
import dogSlice from './dogSlice'
import veterinarianSlice from './veterinarianSlice'
import commentSlice from './commentSlice'
import questionSlice from './questionSlice'
import usersSlice from './usersSlice'
import adoptCatSlice from './adoptCatSlice'
import adoptDogSlice from './adoptDogSlice'




export const store = configureStore({
  reducer: {
    user : userSlice,
    cat : catSlice,
    dog:dogSlice,
 veterinarian :veterinarianSlice,
 question: questionSlice,
 comment: commentSlice,
 users : usersSlice,
 adoptCat: adoptCatSlice,
 adoptDog: adoptDogSlice,

  },
})