import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from"axios";
export const getadoptDog = createAsyncThunk ("adoptDog/get",async()=> {try {
    let result = axios.get("http://localhost:5000/adoptDog/alladoptDog")
    return result;
} catch (error) {
    console.log(error);
}})
export const addadoptDog = createAsyncThunk ("adoptDog/add",async(adoptDog)=> {try {
    let result = axios.post("http://localhost:5000/adoptDog/addadoptDog",adoptDog)
    return result;
} catch (error) {
    console.log(error);
}})
export const deleteadoptDog = createAsyncThunk ("adoptDog/delete",async(id)=> {try {
    let result = axios.delete (`http://localhost:5000/adoptDog/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
export const editadoptDog = createAsyncThunk ("adoptDog/update",async({id,edited})=> 
    {try {
    let result = axios.put (`http://localhost:5000/adoptDog/${id}`,{ status: "accepted" })
    return result;
} catch (error) {
    console.log(error);
}})
const initialState={
    adoptDoglist:null,
    status:null,
}
export const adoptDogSlice = createSlice({

  name: 'adoptDog',
  initialState,
  reducers: {},
  extraReducers:{
    [getadoptDog.pending]:(state) => {
        state.status="pending";
    },
    [getadoptDog.fulfilled]:(state,action) => {
        state.status="fullfilled";
        state.adoptDoglist =action.payload.data.adoptDog;
    },
    [getadoptDog.rejected]:(state) => {
        state.status="rejected";
    },

    [addadoptDog.pending]:(state) => {
        state.status="pending";
    },
    [addadoptDog.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [addadoptDog.rejected]:(state) => {
        state.status="rejected";
    },

    [deleteadoptDog.pending]:(state) => {
        state.status="pending";
    },
    [deleteadoptDog.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [deleteadoptDog.rejected]:(state) => {
        state.status="rejected";
    },

    [editadoptDog.pending]:(state) => {
        state.status="pending";
    },
    [editadoptDog.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [editadoptDog.rejected]:(state) => {
        state.status="rejected";
    },

    

  },
})

// Action creators are generated for each case reducer function
export const { } =adoptDogSlice.actions

export default adoptDogSlice.reducer