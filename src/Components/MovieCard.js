import React from 'react'
import { POSTER_IMG_URL } from '../utils/constant'

const MovieCard = ({path}) => {
  
  return (
    <div className='w-[150px] p-2'>
       <img 
       
       alt='Movies poster images'
       src={POSTER_IMG_URL+path}></img>
    </div>
  )
}

export default MovieCard