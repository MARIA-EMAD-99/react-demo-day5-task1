import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from './AxiosInstance';


export let moviesPropagation= createAsyncThunk('movies3/moviesPropagation', async (currentPage) =>{
   let {data}= await axiosInstance.get(`/popular?page=${currentPage}`)
   return data .results;

})



let initialState= {
    movies: [],
    currentPage: 1,
}


let moviesSlice3= createSlice({
    name: "movies",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(moviesPropagation.fulfilled, (state, action) =>{
            state.movies= action.payload
        })
    },
    reducers: {
        setCurrentPageadd: (state) => {
            state.currentPage ++;
          },
          setCurrentPageaddmin: (state) => {
            state.currentPage --;
          },
    }
})
export const { setCurrentPageadd, setCurrentPageaddmin } = moviesSlice3.actions;
export const moviesReducer3= moviesSlice3.reducer;

