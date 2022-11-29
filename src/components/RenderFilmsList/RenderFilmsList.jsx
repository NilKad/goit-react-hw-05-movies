import RenderFilmsItem from 'components/RenderFilmsItem/RenderFilmsItem';

const RenderFilmsList = ({ filmList }) => {
  return (
    <>
      <ul>
        {filmList.map(item => {
          return (
            <RenderFilmsItem key={item.id} filmItem={item}></RenderFilmsItem>
          );
        })}
      </ul>
    </>
  );
};

export default RenderFilmsList;
