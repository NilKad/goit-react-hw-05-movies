// import { MoviesGetTranding } from 'components/API/FetchFilms';
// import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { Tranding } from 'pages/Tranding';
import { Routes, Route } from 'react-router-dom';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { Link } from 'react-router-dom';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Tranding />} />
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}></Route>
          <Route index element={<Movies />}></Route>
          {/* <Route></Route> */}
          {/* <Route></Route> */}
        </Route>
      </Routes>
    </>
  );
};
