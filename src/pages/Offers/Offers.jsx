import { useMediaQuery } from "react-responsive";
import './Offers.css'
import OffersList from "../../components/OffersList/OffersList";

const Offers = () => {
    const isLargeScreen = useMediaQuery({ minWidth: 880 });

    return (
        <div className="outletContainer">
            {isLargeScreen ?
                <h1>
                    Come and check our <u>Developers</u> job offers!
                </h1>
                :
                <h1>
                    Follow our <u>job offers</u>
                </h1>
            }

            <div className="spinner"></div>
            <OffersList itemsPerPage={4} />
        </div>
    );
}

export default Offers

