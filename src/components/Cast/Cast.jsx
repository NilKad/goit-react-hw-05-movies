import { fetchSearchMoviesCredits } from 'components/API/FetchFilms';
import { CastItem } from 'components/CastItem/CastItem';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.module';
// import imgDefault from 'img/not-found-small.jpg';

const Cast = state => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const refMovieID = useRef(null);

  useEffect(() => {
    if (refMovieID.current === movieId) return;
    const movieSearchCreditsID = async () => {
      const response = await fetchSearchMoviesCredits(movieId);
      // console.log('response credits: ', response.data.cast);
      setMovieCast(response.data.cast);
    };
    movieSearchCreditsID();
    refMovieID.current = movieId;
  }, [movieId]);

  return (
    <CastList>
      {movieCast.map(item => {
        return <CastItem key={item.id} castItem={item} />;
      })}
    </CastList>
  );
};

export default Cast;
