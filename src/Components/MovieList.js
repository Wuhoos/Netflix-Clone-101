import React from 'react'
import Movie from './Movie'

function MovieList({movies}) {
  return (
    <ul className='grid grid-cols-4 gap-5 bg-center'>
      {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </ul>
  )
}

export default MovieList