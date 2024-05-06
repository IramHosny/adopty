import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from"axios";
export const getquestion= createAsyncThunk ("question/get",async()=> {try {
    let result = axios.get("http://localhost:5000/question/allquestion")
    return result;
} catch (error) {
    console.log(error);
}})
export const addquestion = createAsyncThunk ("question/add",async(question)=> {try {
    let result = axios.post("http://localhost:5000/question/addquestion",question)
    return result;
} catch (error) {
    console.log(error);
}})
export const deletequestion = createAsyncThunk ("question/delete",async(id)=> {try {
    let result = axios.delete (`http://localhost:5000/question/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
export const editquestion = createAsyncThunk ("question/update",async({id,edited})=> {try {
    let result = axios.put (`http://localhost:5000/question/${id}`,edited)
    return result;
} catch (error) {
    console.log(error);
}})
const initialState={
    questionlist:null,
    status:null,
}

export const questionSlice = createSlice({

  name: 'question',
  initialState,
  reducers: {},
  extraReducers:{
    [getquestion.pending]:(state) => {
        state.status="pending";
    },
    [getquestion.fulfilled]:(state,action) => {
        state.status="fullfilled";
        state.questionlist =action.payload.data.question;
    },
    [getquestion.rejected]:(state) => {
        state.status="rejected";
    },

    [addquestion.pending]:(state) => {
        state.status="pending";
    },
    [addquestion.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [addquestion.rejected]:(state) => {
        state.status="rejected";
    },

    [deletequestion.pending]:(state) => {
        state.status="pending";
    },
    [deletequestion.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [deletequestion.rejected]:(state) => {
        state.status="rejected";
    },

    [editquestion.pending]:(state) => {
        state.status="pending";
    },
    [editquestion.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [editquestion.rejected]:(state) => {
        state.status="rejected";
    },

    

  },
})

// Action creators are generated for each case reducer function
export const { } =questionSlice.actions

export default questionSlice.reducer