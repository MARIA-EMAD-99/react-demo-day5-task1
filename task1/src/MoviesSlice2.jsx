import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from './AxiosInstance';


export let getMoviesId= createAsyncThunk('movies2/getMoviesId', async (userId, thunkAPI) =>{
   let {data}= await axiosInstance.get(`/${userId}`)
   console.log(data)
   return data;
})

let initialState= {
    movies2: [],
}


let moviesSlice2= createSlice({
    name: "movies2",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getMoviesId.fulfilled, (state, action) =>{
            state.movies2= action.payload
        })
    }
})

export const moviesReducer2= moviesSlice2.reducer;

