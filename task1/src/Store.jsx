import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer1 } from "./MoviesSlice1";
import { moviesReducer2 } from "./MoviesSlice2";
import { moviesReducer3 } from "./MoviesSlice3";


export let store= configureStore({
    reducer: {
        movies1: moviesReducer1,
        movies2: moviesReducer2,
        movies3: moviesReducer3
        
    }
})