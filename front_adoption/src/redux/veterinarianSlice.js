import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from"axios";
export const getveterinarian = createAsyncThunk ("veterinarian/get",async()=> {try {
    let result = axios.get("http://localhost:5000/veterinarian/allveterinarian")
    return result;
} catch (error) {
    console.log(error);
}})
export const addveterinarian = createAsyncThunk ("veterinarian/add",async(veterinarian)=> {try {
    let result = axios.post("http://localhost:5000/veterinarian/addveterinarian",veterinarian)
    return result;
} catch (error) {
    console.log(error);
}})
export const deleteveterinarian= createAsyncThunk ("veterinarian/delete",async(id)=> {try {
    let result = axios.delete (`http://localhost:5000/veterinarian/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
export const editveterinarian = createAsyncThunk ("veterinarian/update",async({id,edited})=> {try {
    let result = axios.put (`http://localhost:5000/veterinarian/${id}`,edited)
    return result;
} catch (error) {
    console.log(error);
}})
const initialState={
    veterinarianlist:null,
    status:null,
}

export const veterinarianSlice = createSlice({

  name: 'veterinarian',
  initialState,
  reducers: {},
  extraReducers:{
    [getveterinarian.pending]:(state) => {
        state.status="pending";
    },
    [getveterinarian.fulfilled]:(state,action) => {
        state.status="fullfilled";
        state.veterinarianlist =action.payload.data.veterinarian;
    },
    [getveterinarian.rejected]:(state) => {
        state.status="rejected";
    },

    [addveterinarian.pending]:(state) => {
        state.status="pending";
    },
    [addveterinarian.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [addveterinarian.rejected]:(state) => {
        state.status="rejected";
    },

    [deleteveterinarian.pending]:(state) => {
        state.status="pending";
    },
    [deleteveterinarian.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [deleteveterinarian.rejected]:(state) => {
        state.status="rejected";
    },

    [editveterinarian.pending]:(state) => {
        state.status="pending";
    },
    [editveterinarian.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [editveterinarian.rejected]:(state) => {
        state.status="rejected";
    },

    

  },
})

// Action creators are generated for each case reducer function
export const { } =veterinarianSlice.actions

export default veterinarianSlice.reducer