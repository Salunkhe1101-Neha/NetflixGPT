import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({ title, movies }) => {
  return (
   movies&&
   <div className='pl-6'>
      <div className='text-white font-bold text-3xl py-4'>
        <h1>{title}</h1>
      </div>
      <div className='flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        <div className='flex'>
          {
            movies.map((movies) => {
              return (
                <MovieCard key={movies.key} path={movies?.poster_path} />
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default MovieList