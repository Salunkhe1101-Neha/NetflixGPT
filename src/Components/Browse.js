import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryMainCon from './SecondaryMainCon';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header></Header>
      <MainContainer />
      <SecondaryMainCon />
    </div>
  )
}

export default Browse