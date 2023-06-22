const getOfferTotalScore = (acc, curr) => acc + curr.score;

export const sortOfersByAverageScore_descendingOrder = (offers) =>
    offers.sort((offerA, offerB) => {
        const offerA_score = offerA.ratings.reduce(getOfferTotalScore, 0);
        let offerA_scoreAverage = 0;
        if (offerA.ratings.length != 0) offerA_scoreAverage = offerA_score / offerA.ratings.length;

        const offerB_score = offerB.ratings.reduce(getOfferTotalScore, 0);
        let offerB_scoreAverage = 0;
        if (offerB.ratings.length != 0) offerB_scoreAverage = offerB_score / offerB.ratings.length;

        return offerB_scoreAverage - offerA_scoreAverage;
    })

export const sortOffersByAverageScore_ascendingOrder = (offers) =>
    offers.sort((offerA, offerB) => {
        const offerA_score = offerA.ratings.reduce(getOfferTotalScore, 0);
        let offerA_scoreAverage = 0;
        if (offerA.ratings.length != 0) offerA_scoreAverage = offerA_score / offerA.ratings.length;

        const offerB_score = offerB.ratings.reduce(getOfferTotalScore, 0);
        let offerB_scoreAverage = 0;
        if (offerB.ratings.length != 0) offerB_scoreAverage = offerB_score / offerB.ratings.length;

        return offerA_scoreAverage - offerB_scoreAverage;
    });
