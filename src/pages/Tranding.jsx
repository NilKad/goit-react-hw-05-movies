import { MoviesGetTranding } from 'components/API/FetchFilms';
import RenderFilmsList from 'components/RenderFilmsList/RenderFilmsList';
import { Suspense, useEffect, useState } from 'react';

let isMounted = false;

const Tranding = () => {
  const [filmsList, setFilmsList] = useState([]);

  const getFilms = async () => {
    const films = await MoviesGetTranding();
    setFilmsList(films.data.results);
  };

  useEffect(() => {
    if (isMounted) return;
    getFilms();
    isMounted = true;

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <h1>Tranding toodays</h1>
      <Suspense>
        {filmsList.length > 0 && <RenderFilmsList filmList={filmsList} />}
      </Suspense>
    </>
  );
};

export default Tranding;
