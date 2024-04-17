import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from"axios";
export const getcat = createAsyncThunk ("cat/get",async()=> {try {
    let result = axios.get("http://localhost:5000/cat/allcat")
    return result;
} catch (error) {
    console.log(error);
}})
export const addcat = createAsyncThunk ("cat/add",async(cat)=> {try {
    let result = axios.post("http://localhost:5000/cat/addcat",cat)
    return result;
} catch (error) {
    console.log(error);
}})
export const deletecat = createAsyncThunk ("cat/delete",async(id)=> {try {
    let result = axios.delete (`http://localhost:5000/cat/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
export const editcat = createAsyncThunk ("cat/update",async({id,edited})=> {try {
    let result = axios.put (`http://localhost:5000/cat/${id}`,edited)
    return result;
} catch (error) {
    console.log(error);
}})
const initialState={
    catlist:null,
    status:null,
}

export const catSlice = createSlice({

  name: 'cat',
  initialState,
  reducers: {},
  extraReducers:{
    [getcat.pending]:(state) => {
        state.status="pending";
    },
    [getcat.fulfilled]:(state,action) => {
        state.status="fullfilled";
        state.catlist =action.payload.data.cat;
    },
    [getcat.rejected]:(state) => {
        state.status="rejected";
    },

    [addcat.pending]:(state) => {
        state.status="pending";
    },
    [addcat.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [addcat.rejected]:(state) => {
        state.status="rejected";
    },

    [deletecat.pending]:(state) => {
        state.status="pending";
    },
    [deletecat.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [deletecat.rejected]:(state) => {
        state.status="rejected";
    },

    [editcat.pending]:(state) => {
        state.status="pending";
    },
    [editcat.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [editcat.rejected]:(state) => {
        state.status="rejected";
    },

    

  },
})

// Action creators are generated for each case reducer function
export const { } =catSlice.actions

export default catSlice.reducer