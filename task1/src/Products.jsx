import React, { useEffect} from 'react'
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from './MoviesSlice1';


export default function Products() {

  let {movies1}= useSelector( (state) =>
  state.movies1
);

let dispatch= useDispatch()


useEffect( () => {
   dispatch(getAllMovies())
}, [])

  return (
    <div className='row'>
      {movies1.map((movie) => {
        return <Cart movie={movie} key={movie.id}/>
      })}
    </div>
  )
}
