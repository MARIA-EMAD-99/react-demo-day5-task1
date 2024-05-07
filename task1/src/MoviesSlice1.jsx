import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from './AxiosInstance';


export let getAllMovies= createAsyncThunk('movies1/getAllMovies', async () =>{
   let {data}= await axiosInstance.get("/popular")
   return data .results;
})

let initialState= {
    movies1: [],
}


let moviesSlice1= createSlice({
    name: "movies1",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllMovies.fulfilled, (state, action) =>{
            state.movies1= action.payload
        })
    }
})

export const moviesReducer1= moviesSlice1.reducer;

