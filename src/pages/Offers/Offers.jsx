import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import './Offers.css'
import OffersList from "../../components/OffersList/OffersList";
import ExperienceYearsSlider from "../../components/offersComponts/ExperienceYearsSlider/ExperienceYearsSlider";
import JobTypeSelect from "../../components/offersComponts/JobTypeSelect/JobTypeSelect";
import {
    OfferType,
    OfferState,
    JobType,
    AverageScoreType,
    AnnualSalaryType,
    ExperienceYearsType,
    getJoTypeValue,
    getOfferStateValue,
} from "../../types/filters/filter.types";
import OfferStateSelect from "../../components/offersComponts/OfferStateSelect/OfferStateSelect";

const initFiltersToApply_AllFilterOff = {
    byExperienceYears: ExperienceYearsType.FilterOff,
    byAnnualSalary: AnnualSalaryType.FilterOff,
    byOfferState: OfferState.FilterOff,
    byJobType: JobType.FilterOff,
    byOfferType: OfferType.FilterOff,
    byAverageScore: AverageScoreType.FilterOff,
}

// const filters = {
//     // GreaterOrEqualThanExperienceYears, LessOrEqualThanExperienceYears
//     byExperienceYears: ExperienceYearsType.GreaterOrEqualThanExperienceYears,
//     //experinceYears: valueExperienceYearsSlider,
//     experinceYears: 0,

//     // GreaterOrEqualThanAnnualSalary, LessOrEqualThanAnnualSalary
//     byAnnualSalary: AnnualSalaryType.FilterOff,
//     annualSalary: 100,

//     // Close, Suspended, Open
//     byOfferState: OfferState.FilterOff,

//     // Remote, Office, Hybrid
//     byJobType: JobType.FilterOff,

//     // CompanyOffer, FreelandOffer
//     byOfferType: OfferType.FilterOff,

//     // DescendingOrder, AscendingOrder
//     byAverageScore: AverageScoreType.DescendingOrder,
// }

const Offers = () => {
    const isLargeScreen = useMediaQuery({ minWidth: 880 });
    const [valueExperienceYearsSlider, setValueExperienceYearsSlider] = useState(0);
    const [valueJobTypeSelect, setValueJobTypeSelect] = useState('All');
    const [valueOfferStateSelect, setValueOfferStateSelect] = useState('All');

    const [filtersToApply, setFiltersToApply] = useState(initFiltersToApply_AllFilterOff)

    const filters = {
        // GreaterOrEqualThanExperienceYears, LessOrEqualThanExperienceYears
        byExperienceYears: ExperienceYearsType.FilterOff,
        experinceYears: valueExperienceYearsSlider,
        //experinceYears: 10,

        // GreaterOrEqualThanAnnualSalary, LessOrEqualThanAnnualSalary
        byAnnualSalary: AnnualSalaryType.FilterOff,
        annualSalary: 100,

        // Close, Suspended, Open
        byOfferState: getOfferStateValue(valueOfferStateSelect),

        // Remote, Office, Hybrid
        byJobType: getJoTypeValue(valueJobTypeSelect),

        // CompanyOffer, FreelandOffer
        byOfferType: OfferType.FilterOff,

        // DescendingOrder, AscendingOrder
        byAverageScore: AverageScoreType.DescendingOrder,
    }

    const handleChangeExperienceYearsSlider = (event, newValue) => {
        setValueExperienceYearsSlider(newValue);
    };

    const handleChangeJobTypeSelect = (event) => {
        setValueJobTypeSelect(event.target.value);
    };

    const handleChangeOfferStateSelect = (event) => {
        setValueOfferStateSelect(event.target.value);
    };

    useEffect(() => {
        //console.log("Offers --> Before --> setFiltersToApply(filters)", filters)
        setFiltersToApply(filters)
        //console.log("Offers --> After --> setFiltersToApply(filters)", filters)
    }, [valueExperienceYearsSlider]);

    useEffect(() => {
        //console.log("Offers --> Before --> setFiltersToApply(filters)", filters)
        setFiltersToApply(filters)
        //console.log("Offers --> After --> setFiltersToApply(filters)", filters)
    }, [valueJobTypeSelect]);

    useEffect(() => {
        //console.log("Offers --> Before --> setFiltersToApply(filters)", filters)
        setFiltersToApply(filters)
        //console.log("Offers --> After --> setFiltersToApply(filters)", filters)
    }, [valueOfferStateSelect]);

    return (
        <div className="outletContainer">
            {isLargeScreen ?
                <h1>
                    Ven y consulta nuestras ofertas de trabajo para <u>Desarrolladores</u>!
                </h1>
                :
                <h1>
                    Sigue nuestras <u>ofertas de trabajo</u>
                </h1>
            }

            <div className="spinner"></div>
            <div className="offers-filters-and-offersList-container">
                <div className="offers-filters-container">
                    <div className="offers-filter-jobType-container">
                        <JobTypeSelect
                            value={valueJobTypeSelect}
                            onChange={handleChangeJobTypeSelect}
                        />
                    </div>
                    <div className="offers-filter-offerState-container">
                        <OfferStateSelect
                            value={valueOfferStateSelect}
                            onChange={handleChangeOfferStateSelect}
                        />
                    </div>
                    <div className="offers-filter-experienceYears-container">
                        <p>Años de experiencia:</p>
                        <ExperienceYearsSlider
                            value={valueExperienceYearsSlider}
                            onChange={handleChangeExperienceYearsSlider}
                        />
                    </div>
                </div>
                <div className="offers-offersList-container">
                    {/* {console.log("send --> filters to apply: ", filtersToApply)} */}
                    <OffersList filters={filtersToApply} itemsPerPage={10} />
                </div>
            </div>
        </div>
    );
}

export default Offers

