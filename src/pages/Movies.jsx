import { useState, useEffect } from 'react';
import { MoviesSearch } from 'components/API/FetchFilms';
import { useSearchParams } from 'react-router-dom';
import { FormSearch } from './Movies.module';
import RenderFilmsList from 'components/RenderFilmsList/RenderFilmsList';

const Movies = () => {
  const [filmsList, setFilmsList] = useState([]);
  const [searchFilm, setSearchFilm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryString, setQueryString] = useState('');

  const updateQueryString = e => {
    const value = e.target.value;
    setQueryString(value);
  };

  const searchSubmit = e => {
    e.preventDefault();
    const query = e.target.searchFilms.value;
    setSearchFilm(query);
    setSearchParams({ query });
  };

  const searchSubmitFilms = async searchQuery => {
    const films = await MoviesSearch(searchQuery);
    setFilmsList(films.data.results);
  };

  useEffect(() => {
    if (searchParams.get('query') && searchParams.get('query') !== searchFilm) {
      setSearchFilm(searchParams.get('query'));
      setQueryString(searchParams.get('query'));
    }
  }, [searchFilm, searchParams]);

  useEffect(() => {
    if (searchFilm === '') return;
    searchSubmitFilms(searchFilm);
  }, [searchFilm]);

  return (
    <>
      <FormSearch onSubmit={searchSubmit}>
        <input
          type="text"
          name="searchFilms"
          autoFocus
          autoComplete="off"
          value={queryString}
          onChange={updateQueryString}
        />
        <button type="submit">Search</button>
      </FormSearch>
      {filmsList.length > 0 && <RenderFilmsList filmList={filmsList} />}
    </>
  );
};

export default Movies;
