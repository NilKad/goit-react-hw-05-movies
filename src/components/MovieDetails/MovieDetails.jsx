import { MoviesDetails } from 'components/API/FetchFilms';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import {
  BackLink,
  DescriptionImg,
  MovieDetailsBlock,
  MovieWrap,
  WrapDescription,
} from './MovieDetails.module';

import imgDefault from 'img/not-found-400x600.jpg';

// let isMounted = false;

const MovieDetails = () => {
  const { movieId } = useParams();
  const refMovieID = useRef(null);
  // const isLoading = useRef(false);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/';

  useEffect(() => {
    if (refMovieID.current === movieId) {
      return;
    }
    const movieSearchID = async () => {
      const response = await MoviesDetails(movieId);
      // const newResponse = {
      //   id: response.data.id,
      //   title: response.data.title,
      //   name: response.data.name,
      //   overview: response.data.overview,
      //   genres: response.data.genres,
      //   genre_ids: response.data.genre_ids,
      //   vote_average: response.data.vote_average,
      //   release_date: response.data.release_date,
      //   poster_path: response.data.poster_path,
      // };
      setMovie(response.data);
    };
    movieSearchID();
    refMovieID.current = movieId;
  }, [movieId]);

  useEffect(() => {
    if (movie == null) return;
    // console.log('MovieDetails ****movie: ', movie);
    // console.log('movie.title: ', movie?.title);
    // console.log(
    //   'movie genres: ',
    //   movie.genres
    //     .map(item => {
    //       return Object.values(item)[1];
    //     })
    //     .join(', ')
    // );
  }, [movie]);

  console.log('movie.poster_path: ', movie?.poster_path);
  return (
    <>
      {movie && (
        <>
          <MovieDetailsBlock>
            <BackLink to={backLinkRef}>Go Back</BackLink>
            <MovieWrap>
              <WrapDescription>
                {movie.poster_path && (
                  <DescriptionImg>
                    <img
                      src={
                        movie?.poster_path !== null
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : imgDefault
                      }
                      alt=""
                      width="400"
                    ></img>
                  </DescriptionImg>
                )}

                <div>
                  <h2>{`${movie.title} (${movie.release_date?.slice(
                    0,
                    4
                  )})`}</h2>
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
              </WrapDescription>
            </MovieWrap>
          </MovieDetailsBlock>
          <div>
            <p>Additional ifnformation </p>
            <ul>
              <li>
                <Link to="cast" state={{ from: backLinkRef }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from: backLinkRef }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
