export const OfferType = {
    CompanyOffer: "CompanyOffer",
    FreelandOffer: "FreelandOffer",
    FilterOff: "FilterOff"
}

export const OfferState = {
    Close: "Close",
    Suspended: "Suspended",
    Open: "Open",
    FilterOff: "FilterOff"
}

export const JobType = {
    Remote: "Remote",
    Office: "Office",
    Hybrid: "Hybrid",
    FilterOff: "FilterOff"
}

export const AverageScoreType = {
    DescendingOrder: "DescendingOrder",
    AscendingOrder: "AscendingOrder",
    FilterOff: "FilterOff"
}

export const AnnualSalaryType = {
    GreaterOrEqualThanAnnualSalary: "GreaterOrEqualThanAnnualSalary",
    LessOrEqualThanAnnualSalary: "LessOrEqualThanAnnualSalary",
    FilterOff: "FilterOff"
}

export const ExperienceYearsType = {
    GreaterOrEqualThanExperienceYears: "GreaterOrEqualThanExperienceYears",
    LessOrEqualThanExperienceYears: "LessOrEqualThanExperienceYears",
    FilterOff: "FilterOff"
}

export const getJoTypeValue = (jobType) => {
    //console.log("getJoTypeValue --> jobType: ", jobType)
    switch (jobType) {
        case "All":
            return JobType.FilterOff
        case "Remote":
            return JobType.Remote
        case "Office":
            return JobType.Office
        case "Hybrid":
            return JobType.Hybrid
        default:
            return JobType.FilterOff
    }
}

export const getOfferStateValue = (offerState) => {
    //console.log("getJoTypeValue --> jobType: ", jobType)
    switch (offerState) {
        case "All":
            return OfferState.FilterOff
        case "Close":
            return OfferState.Close
        case "Open":
            return OfferState.Open
        case "Suspended":
            return OfferState.Suspended
        default:
            return OfferState.FilterOff
    }
}