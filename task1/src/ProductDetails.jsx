import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesId } from './MoviesSlice2';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const {id}= useParams();

  let {movies2}= useSelector( (state) =>
  state.movies2
);

let dispatch= useDispatch()


useEffect( () => {
  dispatch(getMoviesId(id))
}, [id])

  return (
    <div className='row'>
      <div className='col-md-3'>
      <div className='movie mt-3'>
           <img src={'https://image.tmdb.org/t/p/w500'+ movies2.poster_path} className='w-100' alt={movies2.poster_path}/>
           <h3>{movies2.original_title}</h3>
           <p>{movies2.overview}</p>
      </div>
    </div>
    </div>
  )
}
