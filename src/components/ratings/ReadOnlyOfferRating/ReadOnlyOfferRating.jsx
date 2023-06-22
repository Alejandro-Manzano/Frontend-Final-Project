import Rating from '@mui/material/Rating';
import { getOfferAverageScore } from '../../../util/ratings';
import './ReadOnlyOfferRating.css'

const ReadOnlyOfferRating = ({ offer }) => {
    const averageScore = getOfferAverageScore(offer);
    return (
        <Rating
            name="half-rating-read"
            defaultValue={averageScore}
            precision={0.5}
            readOnly
        />
    );
};

export default ReadOnlyOfferRating;
