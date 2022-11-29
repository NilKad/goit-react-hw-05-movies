import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '442ec4eed380e4d9a0bbe35a3c5bec9d',
  language: 'en-US',
};

const fetchTmdb = {
  fetchTrending: `/trending/movie/day`,
  fetchSearchMovies: `/search/movie`,
  fetchSearchMoviesId: `/movie`,
  fetchSearchMoviesCredits: `/movie`,
  fetchSearchMoviesReviews: `/movie`,
};

const MoviesGetTranding = async () => {
  const data = await axios.get(fetchTmdb.fetchTrending);

  return data;
};

const MoviesSearch = async searchQuery => {
  const data = await axios.get(fetchTmdb.fetchSearchMovies, {
    params: { query: searchQuery },
  });
  return data;
};

const fetchSearchMoviesCredits = async filmId => {
  const data = await axios.get(
    `${fetchTmdb.fetchSearchMoviesId}/${filmId}/credits`,
    {
      params: {},
    }
  );
  return data;
};

const fetchSearchMoviesReviews = async filmId => {
  const data = await axios.get(
    `${fetchTmdb.fetchSearchMoviesId}/${filmId}/reviews`,
    {
      params: {},
    }
  );
  return data;
};

const MoviesDetails = async filmId => {
  const data = await axios.get(`${fetchTmdb.fetchSearchMoviesId}/${filmId}`, {
    params: {},
  });
  return data;
};
const MoviesCredits = () => {
  return '';
};

const MoviesReviews = () => {
  return '';
};

export {
  MoviesGetTranding,
  MoviesSearch,
  MoviesDetails,
  MoviesCredits,
  MoviesReviews,
  fetchSearchMoviesCredits,
  fetchSearchMoviesReviews,
};
