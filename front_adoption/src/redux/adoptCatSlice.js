import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from"axios";
export const getadoptCat = createAsyncThunk ("adoptCat/get",async()=> {try {
    let result = axios.get("http://localhost:5000/adoptCat/alladoptCat")
    return result;
} catch (error) {
    console.log(error);
}})
export const addadoptCat = createAsyncThunk ("adoptCat/add",async(adoptCat)=> {try {
    let result = axios.post("http://localhost:5000/adoptCat/addadoptCat",adoptCat)
    return result;
} catch (error) {
    console.log(error);
}})
export const deleteadoptCat = createAsyncThunk ("adoptCat/delete",async(id)=> {try {
    let result = axios.delete (`http://localhost:5000/adoptCat/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
export const editadoptCat = createAsyncThunk ("adoptCat/update",async({id,edited})=> 
    {try {
    let result = axios.put (`http://localhost:5000/adoptCat/${id}`,{ status: "accepted" })
    return result;
} catch (error) {
    console.log(error);
}})
const initialState={
    adoptCatlist:null,
    status:null,
}

export const adoptCatSlice = createSlice({

  name: 'adoptCat',
  initialState,
  reducers: {},
  extraReducers:{
    [getadoptCat.pending]:(state) => {
        state.status="pending";
    },
    [getadoptCat.fulfilled]:(state,action) => {
        state.status="fullfilled";
        state.adoptCatlist =action.payload.data.adoptCat;
    },
    [getadoptCat.rejected]:(state) => {
        state.status="rejected";
    },

    [addadoptCat.pending]:(state) => {
        state.status="pending";
    },
    [addadoptCat.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [addadoptCat.rejected]:(state) => {
        state.status="rejected";
    },

    [deleteadoptCat.pending]:(state) => {
        state.status="pending";
    },
    [deleteadoptCat.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [deleteadoptCat.rejected]:(state) => {
        state.status="rejected";
    },

    [editadoptCat.pending]:(state) => {
        state.status="pending";
    },
    [editadoptCat.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [editadoptCat.rejected]:(state) => {
        state.status="rejected";
    },

    

  },
})

// Action creators are generated for each case reducer function
export const { } =adoptCatSlice.actions

export default adoptCatSlice.reducer