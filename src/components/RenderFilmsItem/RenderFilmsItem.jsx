// import { FilmDetail } from 'pages/FilmDetail';
import { Link, useLocation } from 'react-router-dom';

export const RenderFilmsItem = ({ filmItem }) => {
  const location = useLocation();

  // console.log('FilmsItem: ', filmItem);
  return (
    <>
      {/* <Route path={filmItem.id} element={<FilmDetail />}></Route> */}
      <li>
        <Link to={`/movies/${filmItem.id}`} state={{ from: location }}>
          {filmItem?.title || filmItem?.original_title || filmItem?.name}
        </Link>
      </li>
    </>
  );
};
