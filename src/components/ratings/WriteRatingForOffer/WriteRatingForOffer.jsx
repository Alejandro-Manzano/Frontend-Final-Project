import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';
import { createRating, getByReference, updateRating } from '../../../services/API_proyect/rating.service';
import { useAuth } from '../../../contexts/authContext';
import './WriteRatingForOffer.css'

// We made the rating to offerToRate
const WriteRatingForOffer = ({ offerToRate }) => {
    const { user } = useAuth()
    const [ratingValue, setRatingValue] = useState(-1);
    const [offerRatingsFromDB, setOfferRatingsFromDB] = useState({});
    const [offerRatingsFromDBFirstTime, setOfferRatingsFromDBFirstTime] = useState({});
    const [responseCreateRating, setResponseCreateRating] = useState({})
    const [responseUpdateRating, setReponsesUpdateRating] = useState({})

    const userLoged = user

    const getOfferRatingsFromDB = async () => {
        setOfferRatingsFromDB(await getByReference("Offer", offerToRate._id))
    }

    const getOfferRatingsFromDBFirstTime = async () => {
        setOfferRatingsFromDBFirstTime(await getByReference("Offer", offerToRate._id))
    }

    const createOrUpdateRating = async (offerRatingsFromDB) => {
        if (offerRatingsFromDB?.data) {
            const filterRating = offerRatingsFromDB.data.filter((rating) => rating.owner == userLoged._id);

            if (filterRating.length == 0) {
                setResponseCreateRating(await createRating({ "score": ratingValue, "referenceOffer": offerToRate._id }));
                setOfferRatingsFromDB({});
            } else {
                setReponsesUpdateRating(await updateRating({ "score": ratingValue, "referenceOffer": offerToRate._id }, filterRating[0]._id));
                setOfferRatingsFromDB({});
            }
        }
    };

    const showFirstTimeRating = async (offerRatingsFromDB) => {
        if (offerRatingsFromDB?.data) {
            const filterRating = offerRatingsFromDB.data
                .filter((rating) => rating.referenceOffer == offerToRate._id);

            if (filterRating.length == 0) {
                setRatingValue(0)
                setOfferRatingsFromDBFirstTime({});
            } else {
                setRatingValue(filterRating[0].score)
                setOfferRatingsFromDBFirstTime({});
            }
        }
    };

    useEffect(() => {
        console.log("response create Rating: ", responseCreateRating)
    }, [responseCreateRating]);

    useEffect(() => {
        console.log("response update Ratins: ", responseUpdateRating)
    }, [responseUpdateRating]);

    useEffect(() => {
        createOrUpdateRating(offerRatingsFromDB);
    }, [offerRatingsFromDB]);

    useEffect(() => {
        showFirstTimeRating(offerRatingsFromDBFirstTime)
    }, [offerRatingsFromDBFirstTime]);

    useEffect(() => {
        if (ratingValue != -1) {
            getOfferRatingsFromDB()
        }
    }, [ratingValue]);


    useEffect(() => {
        getOfferRatingsFromDBFirstTime()
    }, []);

    return (
        <div>
            <Rating
                name="simple Rating component"
                value={ratingValue}
                onChange={(event, newRatingValue) => {
                    setRatingValue(newRatingValue);
                }}
            />
        </div>
    );
}

export default WriteRatingForOffer