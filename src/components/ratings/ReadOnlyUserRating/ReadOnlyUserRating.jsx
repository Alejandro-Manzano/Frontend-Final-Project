import Rating from '@mui/material/Rating';
import { getUserAverageScore } from '../../../util/ratings';
import './ReadOnlyUserRating.css'

const ReadOnlyUserRating = ({ user }) => {
  const averageScore = getUserAverageScore(user);
  return (
    <Rating
      name="half-rating-read"
      defaultValue={averageScore}
      precision={0.5}
      readOnly
    />
  );
};
export default ReadOnlyUserRating;
