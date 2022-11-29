import { Link, useLocation } from 'react-router-dom';

const RenderFilmsItem = ({ filmItem }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${filmItem.id}`} state={{ from: location }}>
        {filmItem?.title || filmItem?.original_title || filmItem?.name}
      </Link>
    </li>
  );
};

export default RenderFilmsItem;
