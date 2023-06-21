import Rating from '@mui/material/Rating';
import { getUserAverageScore } from '../../../util/ratings';

const ReadOnlyRating = ({ user }) => {
    const averageScore = getUserAverageScore(user)
    return (
        <Rating name="half-rating-read" defaultValue={averageScore} precision={0.5} readOnly />
    )
}

// {/* <Rating name="read-only" value={averageScore} readOnly /> */}
export default ReadOnlyRating