import { fetchSearchMoviesReviews } from 'components/API/FetchFilms';
import { ReviewsItem } from 'components/ReviewsItem/ReviewsItem';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const refMovieID = useRef(null);

  useEffect(() => {
    if (refMovieID.current === movieId) return;
    const movieSearchCreditsID = async () => {
      const response = await fetchSearchMoviesReviews(movieId);
      setMovieReviews(response.data.results);
    };
    movieSearchCreditsID();
  }, [movieId]);

  return (
    <ul>
      {movieReviews.length === 0 && (
        <p>We don't have any reviews for this movie</p>
      )}
      {movieReviews.map(item => {
        return <ReviewsItem key={item.id} reviewsItem={item} />;
      })}
    </ul>
  );
};

export default Reviews;
