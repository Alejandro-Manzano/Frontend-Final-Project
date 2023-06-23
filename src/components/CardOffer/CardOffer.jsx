import './CardOffer.css';
import { useNavigate } from 'react-router-dom';
import ReadOnlyOfferRating from '../ratings/ReadOnlyOfferRating/ReadOnlyOfferRating'
import ToggleBtnFollowOffer from '../ToggleBtnFollowOffer/ToggleBtnFollowOffer';

const CardOffer = ({ offer }) => {
    const navigate = useNavigate();
    const pathToOfferDetails = `/offerDetails`;

    return (
        <section className="cardOffer-Info">
            <a className="cardOffer-link-to-offerDetails"
                onClick={() =>
                    navigate(pathToOfferDetails, {
                        state: { offer: offer },
                    })
                }
            >
                <img className="cardOffer-Info-img"src={offer.image} alt={`offer's ${offer.offerTitle} pic`} />
                <div className="cardOffer-Info-tabla-name">
                    {offer.offerTitle}
                    <p className="cardOffer-Info-Ubicado"> 📋 Ubicado/a en {offer.city}</p>
                </div>
                <p className="cardOffer-Info-Ubicado">
                    Años de experiencia: {offer.experienceYears}
                </p>
            </a>
            <ToggleBtnFollowOffer offerToFollowId={offer._id} />
            <div className="cardOffer-Info-ratings">
                <ReadOnlyOfferRating offer={offer} />
            </div>
            <div className="cardOffer-Info-grupo-technologies">
                <h4 className="cardOffer-Info-technologies">{offer.technologies}</h4>
            </div>


        </section>
    );
};

export default CardOffer;
