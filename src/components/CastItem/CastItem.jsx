import imgDefault from 'img/not-found-small.jpg';

export const CastItem = ({ castItem }) => {
  const { name, character, profile_path } = castItem;

  //
  return (
    <li>
      <img
        src={
          profile_path !== null
            ? `https://image.tmdb.org/t/p/w200${profile_path}`
            : imgDefault
        }
        alt={name}
        width="150"
      ></img>
      <h3>{name}</h3>
      <p>{character}</p>
    </li>
  );
};
