import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryMainCon from './SecondaryMainCon';

const Browse = () => {
  
  useNowPlayingMovies();
  
  return (
    <>
    <Header/>
    <MainContainer/>
    <SecondaryMainCon/>
    </>
  )
}

export default Browse