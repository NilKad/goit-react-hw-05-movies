import { RenderFilmsItem } from 'components/RenderFilmsItem/RenderFilmsItem';

export const RenderFilmsList = ({ filmList }) => {
  // console.log('RenderFilmsList: ', filmList);
  return (
    <>
      {/* <h2>Listing Films</h2> */}
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
