import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

import { offer_getAll } from "../../services/API_proyect/offer.service"
import "./OffersList.css";
import { Spinner } from "../Spinner/Spinner";
import { sortUsersByAverageScore_descendingOrder } from "../../util/filters/developer.filter";
import CardOffer from "../CardOffer/CardOffer";

const OffersList = ({ itemsPerPage }) => {
    const [dataDevelopersList, setDataDevelopersList] = useState([]);
    const [downloading, setDownloading] = useState(false);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [pageCount, setPageCount] = useState(0);
    const [itemPerPage, setItemPerPage] = useState([])

    const getDevelopersData = async () => {
        setDownloading(true);
        const data = await offer_getAll()

        // Filter offers by average score
        const dataSortByAverageScore = sortUsersByAverageScore_descendingOrder(dataDevelopers)

        const dataFilterZero = dataSortByAverageScore.slice(0, itemsPerPage)
        const numerberPage = dataSortByAverageScore.length / itemsPerPage

        setPageCount(numerberPage)
        setDataDevelopersList(dataSortByAverageScore)
        setItemPerPage(dataFilterZero)
        setDownloading(false);
    };

    useEffect(() => {
        getDevelopersData();
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
                    <div className="offersList-offers-container">
                        {itemPerPage.map((offer) => (
                            <div key={offer._id}>
                                <CardOffer offer={offer} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};



export default OffersList;
