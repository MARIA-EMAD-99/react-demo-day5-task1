import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesPropagation, setCurrentPage, setCurrentPageadd, setCurrentPageaddmin } from './MoviesSlice3';

 function Movies() {
  const dispatch = useDispatch();
  const {movies} = useSelector((state) => state.movies3);
  const {currentPage} = useSelector((state) => state.movies3);

  useEffect(() => {
    dispatch(moviesPropagation(currentPage));
  }, [currentPage]);


  return (
    <div className='row'>
      {movies.map((movie) => (
        <div className='col-md-3' key={movie.id}>
          <div className='movie mt-3'>
            <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} className='w-100' alt={movie.original_title} />
            <h3>{movie.original_title}</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      ))}
      <div className='d-flex justify-content-center align-items-center mb-5'>
        <button
          className='btn btn-secondary me-3'
          disabled={currentPage === 1}
          onClick={() => dispatch(setCurrentPageaddmin())}
        >
          Previous
        </button>
        <button className='btn btn-dark' onClick={() => dispatch(setCurrentPageadd())}>
          Next
        </button>
      </div>
    </div>
  );
}




export default  Movies