export const ReviewsItem = ({ reviewsItem }) => {
  const { author, content } = reviewsItem;
  //
  return (
    <li>
      <p>{author}</p>
      <p>{content}</p>
    </li>
  );
};
