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
  // fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  // fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  // fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  // fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  // fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  // fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  // fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

// const fetchAPI = async () => {
//   const data = await axios.get(fetchTmdb.fetchTrending);
// };

const MoviesGetTranding = async () => {
  const data = await axios.get(fetchTmdb.fetchTrending);
  // console.log('MoviesGetTranding', data);

  return data;
};

const MoviesSearch = async searchQuery => {
  const data = await axios.get(fetchTmdb.fetchSearchMovies, {
    params: { query: searchQuery },
  });
  console.log('MoviesSearch', data);
  return data;
};

const MoviesDetails = async filmId => {
  const data = await axios.get(`${fetchTmdb.fetchSearchMoviesId}/${filmId}`, {
    params: {},
  });
  // console.log('MoviesDetails', data);
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
};
