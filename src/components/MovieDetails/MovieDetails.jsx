import { MoviesDetails } from 'components/API/FetchFilms';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

// let isMounted = false;

export const MovieDetails = () => {
  const { movieId } = useParams();
  const refMovieID = useRef(null);
  // const isLoading = useRef(false);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/';

  // const getGenres

  useEffect(() => {
    if (refMovieID.current === movieId) {
      return;
    }
    const movieSearchID = async () => {
      const response = await MoviesDetails(movieId);
      const newResponse = {
        id: response.data.id,
        title: response.data.title,
        name: response.data.name,
        overview: response.data.overview,
        genres: response.data.genres,
        genre_ids: response.data.genre_ids,
        vote_average: response.data.vote_average,
        release_date: response.data.release_date,
        poster_path: response.data.poster_path,
      };
      setMovie(newResponse);
    };
    movieSearchID();
    refMovieID.current = movieId;
  }, [movieId]);

  useEffect(() => {
    if (movie == null) return;
    console.log('MovieDetails ****movie: ', movie);
    console.log('movie.title: ', movie?.title);
    console.log(
      'movie genres: ',
      movie.genres
        .map(item => {
          return Object.values(item)[1];
        })
        .join(', ')
    );
  }, [movie]);

  return (
    <>
      {movie && (
        <div>
          <Link to={backLinkRef}>Go Back</Link>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            ></img>
            <div>
              <h2>{`${movie.title} (${movie.release_date?.slice(0, 4)})`}</h2>
              <p>{`Use Score: ${Math.round(movie.vote_average * 10)}%`}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              {
                <p>
                  {movie.genres
                    .map(item => {
                      return Object.values(item)[1];
                    })
                    .join(', ')}
                </p>
              }
            </div>
          </div>
        </div>
      )}

      {/* <h2>MovieDetails</h2>;{movie && 'render movie'} */}
      {/* <h2>MovieDetails</h2> */}
    </>
  );
};

// export default MovieDetails;
