import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

import { offer_getAll } from "../../services/API_proyect/offer.service"
import "./OffersList.css";
import { Spinner } from "../Spinner/Spinner";
import {
    filterOffersByJobType,
    filterOffersByLessOrEqualThanAnnualSalary,
    filterOffersByGreaterOrEqualThanAnnualSalary,
    filterOffersByOfferState,
    sortOfersByAverageScore_descendingOrder,
    sortOffersByAverageScore_ascendingOrder,
    filterOffersByGreaterOrEqualThanExperienceYears,
    filterOffersByLessOrEqualThanExperienceYears
} from "../../util/filters/offer.filter";
import CardOffer from "../CardOffer/CardOffer";
import { filterOffersByOfferType } from "../../util/filters/offer.filter";

const OffersList = ({ itemsPerPage }) => {
    const [dataDevelopersList, setDataDevelopersList] = useState([]);
    const [downloading, setDownloading] = useState(false);

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [pageCount, setPageCount] = useState(0);
    const [itemPerPage, setItemPerPage] = useState([])

    // const FilterOnOffType = {
    //     FilterOn: "FilterOn",
    //     FilterOff: "FilterOff"
    // }

    const OfferType = {
        CompanyOffer: "CompanyOffer",
        FreelandOffer: "FreelandOffer",
        FilterOff: "FilterOff"
    }

    const OfferState = {
        Close: "Close",
        Suspended: "Suspended",
        Open: "Open",
        FilterOff: "FilterOff"
    }

    const JobType = {
        Remote: "Remote",
        Office: "Office",
        Hybrid: "Hybrid",
        FilterOff: "FilterOff"
    }

    const AverageScoreType = {
        DescendingOrder: "DescendingOrder",
        AscendingOrder: "AscendingOrder",
        FilterOff: "FilterOff"
    }

    const AnnualSalaryType = {
        GreaterOrEqualThanAnnualSalary: "GreaterOrEqualThanAnnualSalary",
        LessOrEqualThanAnnualSalary: "LessOrEqualThanAnnualSalary",
        FilterOff: "FilterOff"
    }

    const ExperienceYearsType = {
        GreaterOrEqualThanExperienceYears: "GreaterOrEqualThanExperienceYears",
        LessOrEqualThanExperienceYears: "LessOrEqualThanExperienceYears",
        FilterOff: "FilterOff"
    }

    const initFiltersType = {
        ByOfferType: OfferType,
        ByAverageScore: AverageScoreType,
    }

    const initFiltersToApply_AllFilterOff = {
        byExperienceYears: ExperienceYearsType.FilterOff,
        byAnnualSalary: AnnualSalaryType.FilterOff,
        byOfferState: OfferState.FilterOff,
        byJobType: JobType.FilterOff,
        byOfferType: OfferType.FilterOff,
        byAverageScore: AverageScoreType.FilterOff,
    }

    const initFiltersToApply = {
        // GreaterOrEqualThanExperienceYears, LessOrEqualThanExperienceYears
        byExperienceYears: ExperienceYearsType.FilterOff,
        experinceYears: 5,

        // GreaterOrEqualThanAnnualSalary, LessOrEqualThanAnnualSalary
        byAnnualSalary: AnnualSalaryType.FilterOff,
        annualSalary: 100,

        // Close, Suspended, Open
        byOfferState: OfferState.FilterOff,

        // Remote, Office, Hybrid
        byJobType: JobType.FilterOff,

        // CompanyOffer, FreelandOffer
        byOfferType: OfferType.FilterOff,

        // DescendingOrder, AscendingOrder
        byAverageScore: AverageScoreType.DescendingOrder,
    }

    const [filtersToApply, setFilterToApply] = useState(initFiltersToApply)

    const getOffersData = async () => {
        setDownloading(true);
        const dataOffer = await offer_getAll()

        ////////////////////////////////////////
        // NOTE: This is for tests. 
        //       This filters are not gonna be here!
        //////////////////////////////////////////

        console.log("dataOffer: ", dataOffer)

        let dataFilterByOfferType = null
        let dataToRender = dataOffer

        //applyFiltersToData(dataOffer)
        Object.keys(filtersToApply)
            .filter((filter) => filtersToApply[filter] !== "FilterOff")
            .map(filterType => {
                // console.log("map -> Filter type: ", filterType)
                // console.log("map -> Filter By: ", filtersToApply[filterType])



                if (filterType === 'byOfferType') {
                    //  --------------- Filter offers by type ----------
                    //  ---------  Company or Freeland  ----------------

                    //filterByOfferType(initFiltersToApply[filterType]);

                    //dataFilterByOfferType =
                    dataToRender =
                        filterOffersByOfferType(
                            dataToRender,
                            //initFiltersToApply[filterType]
                            filtersToApply[filtersToApply]
                            //"FreelandOffer" 
                            //"LookingForJob"
                        )
                } else if (filterType === 'byAverageScore') {
                    // ----- Filter offers by average score ------

                    //switch (initFiltersToApply[filterType]) {
                    switch (filtersToApply[filterType]) {

                        case "DescendingOrder":
                            console.log("descencing order")
                            //let dataFilterDes = dataFilterByOfferType ? dataFilterByOfferType : dataOffer
                            dataToRender =
                                sortOfersByAverageScore_descendingOrder(dataToRender)
                            break

                        case "AscendingOrder":
                            console.log("ascencing order")
                            //let dataFilterAsc = dataFilterByOfferType ? dataFilterByOfferType : dataOffer
                            dataToRender =
                                sortOffersByAverageScore_ascendingOrder(dataToRender)
                            break

                        default:
                            console.log("Error: this should be a new case for byAverageScore")
                    }
                } else if (filterType === 'byJobType') {
                    // ----- Filter offers by Job Type  (Remote, Office, Hybrid) ------

                    //switch (initFiltersToApply[filterType]) {
                    switch (filtersToApply[filterType]) {
                        case "Remote":
                            console.log("JobType: Remote")

                            dataToRender =
                                filterOffersByJobType(
                                    dataToRender,
                                    //initFiltersToApply[filterType]
                                    filtersToApply[filtersToApply]
                                )
                            break

                        case "Office":
                            console.log("JobType: Office")

                            dataToRender =
                                filterOffersByJobType(
                                    dataToRender,
                                    //initFiltersToApply[filterType]
                                    filtersToApply[filterType]
                                )
                            break

                        case "Hybrid":
                            console.log("JobType: Hybrid")

                            dataToRender =
                                filterOffersByJobType(
                                    dataToRender,
                                    //initFiltersToApply[filterType]
                                    filtersToApply[filterType]
                                )
                            break

                        default:
                            console.log("Error: this should be a new case for byJobType")
                    }
                } else if (filterType === 'byOfferState') {
                    dataToRender =
                        filterOffersByOfferState(
                            dataToRender,
                            //initFiltersToApply[filterType]
                            filtersToApply[filterType]
                            //"Close" 
                            //"Suspended"
                            //"Open"
                        )
                } else if (filterType === 'byAnnualSalary') {
                    // ----- Filter offers by annual salary ------

                    //switch (initFiltersToApply[filterType]) {
                    switch (filtersToApply[filterType]) {

                        case "GreaterOrEqualThanAnnualSalary":
                            console.log("GreaterThanAnnualSalary")

                            dataToRender =
                                filterOffersByGreaterOrEqualThanAnnualSalary(dataToRender, filtersToApply.annualSalary)
                            break

                        case "LessOrEqualThanAnnualSalary":
                            console.log("LessThanAnnualSalary")

                            dataToRender =
                                filterOffersByLessOrEqualThanAnnualSalary(dataToRender, filtersToApply.annualSalary)
                            break

                        default:
                            console.log("Error: this should be a new case for byAnnualSalary")
                    }
                } else if (filterType === 'byAnnualSalary') {
                    // ----- Filter offers by annual salary ------

                    //switch (initFiltersToApply[filterType]) {
                    switch (filtersToApply[filterType]) {

                        case "GreaterOrEqualThanAnnualSalary":
                            console.log("GreaterOrEqualThanAnnualSalary")

                            dataToRender =
                                filterOffersByGreaterOrEqualThanAnnualSalary(dataToRender, filtersToApply.annualSalary)
                            break

                        case "LessOrEqualThanAnnualSalary":
                            console.log("LessOrEqualThanAnnualSalary")

                            dataToRender =
                                filterOffersByLessOrEqualThanAnnualSalary(dataToRender, filtersToApply.annualSalary)
                            break

                        default:
                            console.log("Error: this should be a new case for byAnnualSalary")
                    }
                } else if (filterType === 'byExperienceYears') {
                    // ----- Filter offers by years of experice  ------

                    //switch (initFiltersToApply[filterType]) {
                    switch (filtersToApply[filterType]) {

                        case "GreaterOrEqualThanExperienceYears":
                            console.log("GreaterOrEqualThanExperienceYears")

                            dataToRender =
                                filterOffersByGreaterOrEqualThanExperienceYears(dataToRender, filtersToApply.experinceYears)
                            break

                        case "LessOrEqualThanExperienceYears":
                            console.log("LessOrEqualThanExperienceYears")

                            dataToRender =
                                filterOffersByLessOrEqualThanExperienceYears(dataToRender, filtersToApply.experinceYears)
                            break

                        default:
                            console.log("Error: this should be a new case for byExperienceYears")
                    }
                }
            })

        // Filter offers by type
        //const dataFilterByOfferType = filterOffersByOfferType(dataOffer, "OfferMySelf")
        //const dataFilterByOfferType2 = filterOffersByOfferType(dataOffer, "LookingForJob")


        // Filter offers by average score
        //const dataSortByAverageScore = sortOfersByAverageScore_descendingOrder(dataFilterByOfferType2)

        // const dataFilterZero = dataSortByAverageScore.slice(0, itemsPerPage)
        // const numerberPage = dataSortByAverageScore.length / itemsPerPage

        const dataFilterZero = dataToRender.slice(0, itemsPerPage)
        const numerberPage = dataToRender.length / itemsPerPage

        setPageCount(numerberPage)
        //setDataDevelopersList(dataSortByAverageScore)
        setDataDevelopersList(dataToRender)
        setItemPerPage(dataFilterZero)
        setDownloading(false);
    };

    useEffect(() => {
        getOffersData();
    }, []);

    const handlePageClick = (event) => {
        console.log(event) /// selected empieza por 0
        const end = (event.selected * itemsPerPage) + itemsPerPage == 0 ? itemsPerPage : (event.selected * itemsPerPage) + itemsPerPage
        const developersListWithOffset = dataDevelopersList.slice(end - itemsPerPage, end);
        setItemPerPage(developersListWithOffset)
    };

    return (
        <div className="offersList-container">
            {downloading ? (
                <Spinner />
            ) : (
                <div className="offersList-paginate-and-offers-list-container">

                    <div className="offersList-offers-container">
                        {itemPerPage.map((offer) => (
                            <div key={offer._id}>
                                <CardOffer offer={offer} />
                            </div>
                        ))}
                    </div>

                    < ReactPaginate
                        className="offersList-paginate"
                        activeClassName="offersList-paginate-active-element"
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    />
                </div>
            )}
        </div>
    );
};



export default OffersList;
