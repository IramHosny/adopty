import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from"axios";
export const getdog = createAsyncThunk ("dog/get",async()=> {try {
    let result = axios.get("http://localhost:5000/dog/alldog")
    return result;
} catch (error) {
    console.log(error);
}})
export const adddog = createAsyncThunk ("dog/add",async(dog)=> {try {
    let result = axios.post("http://localhost:5000/dog/adddog",dog)
    return result;
} catch (error) {
    console.log(error);
}})
export const deletedog = createAsyncThunk ("dog/delete",async(id)=> {try {
    let result = axios.delete (`http://localhost:5000/dog/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
export const editdog = createAsyncThunk ("dog/update",async({id,edited})=> {try {
    let result = axios.put (`http://localhost:5000/dog/${id}`,edited)
    return result;
} catch (error) {
    console.log(error);
}})
const initialState={
    doglist:null,
    status:null,
}

export const dogSlice = createSlice({

  name: 'dog',
  initialState,
  reducers: {},
  extraReducers:{
    [getdog.pending]:(state) => {
        state.status="pending";
    },
    [getdog.fulfilled]:(state,action) => {
        state.status="fullfilled";
        state.doglist =action.payload.data.dog;
    },
    [getdog.rejected]:(state) => {
        state.status="rejected";
    },

    [adddog.pending]:(state) => {
        state.status="pending";
    },
    [adddog.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [adddog.rejected]:(state) => {
        state.status="rejected";
    },

    [deletedog.pending]:(state) => {
        state.status="pending";
    },
    [deletedog.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [deletedog.rejected]:(state) => {
        state.status="rejected";
    },

    [editdog.pending]:(state) => {
        state.status="pending";
    },
    [editdog.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [editdog.rejected]:(state) => {
        state.status="rejected";
    },

    

  },
})

// Action creators are generated for each case reducer function
export const { } =dogSlice.actions

export default dogSlice.reducer