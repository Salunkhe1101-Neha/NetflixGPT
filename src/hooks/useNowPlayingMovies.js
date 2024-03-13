import React, { useState, useEffect } from 'react'
import { options } from '../utils/constant';


const useNowPlayingMovies = () => {
    const [moviedata, setMovieData]=useState();
  const addNowPlaingMovies= async () =>
  {
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    const json = await data.json();
    console.log(json.results)
  }
  useEffect(() => {
    addNowPlaingMovies();
  }, [])
 
}

export default useNowPlayingMovies