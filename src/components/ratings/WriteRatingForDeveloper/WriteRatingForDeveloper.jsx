import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';
import { createRating, getByReference, updateRating } from '../../../services/API_proyect/rating.service';
import { useAuth } from '../../../contexts/authContext';
import './WriteRatingForDeveloper.css'

// We made the rating to userToRate
const WriteRatingForDeveloper = ({ userToRate }) => {
    const { user } = useAuth()
    const [ratingValue, setRatingValue] = useState(-1);
    const [userRatingsFromDB, setUserRatingsFromDB] = useState({});
    const [userRatingsFromDBFirstTime, setUserRatingsFromDBFirstTime] = useState({});
    const [responseCreateRating, setResponseCreateRating] = useState({})
    const [responseUpdateRating, setReponsesUpdateRating] = useState({})

    const userLoged = user

    // If the user to rate is the user loged, we just leave
    if (userToRate._id === userLoged._id) return null;

    const getUserRatingsFromDB = async () => {
        setUserRatingsFromDB(await getByReference("User", userToRate._id))
    }

    const getUserRatingsFromDBFirstTime = async () => {
        setUserRatingsFromDBFirstTime(await getByReference("User", userToRate._id))
    }

    const createOrUpdateRating = async (userRatingsFromDB) => {
        if (userRatingsFromDB?.data) {
            const filterRating = userRatingsFromDB.data.filter((rating) => rating.owner == userLoged._id);

            if (filterRating.length == 0) {
                setResponseCreateRating(await createRating({ "score": ratingValue, "referenceDeveloper": userToRate._id }));
                setUserRatingsFromDB({});
            } else {
                setReponsesUpdateRating(await updateRating({ "score": ratingValue, "referenceDeveloper": userToRate._id }, filterRating[0]._id));
                setUserRatingsFromDB({});
            }
        }
    };

    const showFirstTimeRating = async (userRatingsFromDB) => {
        if (userRatingsFromDB?.data) {
            const filterRating = userRatingsFromDB.data
                .filter((rating) => rating.referenceDeveloper == userToRate._id);

            if (filterRating.length == 0) {
                setRatingValue(0)
                setUserRatingsFromDBFirstTime({});
            } else {
                setRatingValue(filterRating[0].score)
                setUserRatingsFromDBFirstTime({});
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
        createOrUpdateRating(userRatingsFromDB);
    }, [userRatingsFromDB]);

    useEffect(() => {
        showFirstTimeRating(userRatingsFromDBFirstTime)
        //console.log("Rating first time")
    }, [userRatingsFromDBFirstTime]);

    useEffect(() => {
        if (ratingValue != -1) {
            getUserRatingsFromDB()
        }
    }, [ratingValue]);


    useEffect(() => {
        getUserRatingsFromDBFirstTime()
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

export default WriteRatingForDeveloper