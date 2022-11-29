// import { MoviesGetTranding } from 'components/API/FetchFilms';
// import { Home } from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// import Movies from 'pages/Movies';
import Tranding from 'pages/Tranding';
import Cast from './Cast/Cast';
import MovieDetails from './MovieDetails/MovieDetails';
import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';
import React from 'react';

const Movies = lazy(() => import('../pages/Movies'));
// import { Link } from 'react-router-dom';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Tranding />} />
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route index element={<Movies />}></Route>
          {/* <Route></Route> */}
          {/* <Route></Route> */}
        </Route>
      </Routes>
    </>
  );
};
