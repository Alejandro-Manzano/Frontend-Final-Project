import './CardOffer.css';
import { useNavigate } from 'react-router-dom';
import ReadOnlyOfferRating from '../ratings/ReadOnlyOfferRating/ReadOnlyOfferRating'
import ToggleBtnFollowOffer from '../ToggleBtnFollowOffer/ToggleBtnFollowOffer';

const CardOffer = ({ offer }) => {
    const navigate = useNavigate();
    const pathToOfferDetails = `/offerDetails`;


    //console.log("CardOffer --> offer: ", offer)
    return (
        <section className="cardOffer-Info">
            
            <section className="cardOffer-link-to-offerDetails"
                onClick={() =>
                    navigate(pathToOfferDetails, {
                        state: { id: offer._id },
                    })
                }
            >
                <div className="cardOffer-BtnToggle">
                    <ToggleBtnFollowOffer offerToFollowId={offer._id} />
                </div>
                <img className="cardOffer-Info-img" src={offer.image} alt={`offer's ${offer.offerTitle} pic`} />
                <div className="cardOffer-Info-ratings">
                    <ReadOnlyOfferRating offer={offer} />
                </div>
            </section>
            <section className="cardOffer-paragraph">
                <div className="cardOffer-Profile">


                    <div className="cardOffer-Info-tabla-name">
                        {offer.offerTitle}
                    </div>
                    <div className="cardOffer-Info-grupo-technologies">
                    <h4 className="cardOffer-Info-technologies">{offer.technologies.join(', ')}</h4>
                    </div>
                    <p className="cardOffer-Info-Description">
                        {offer.description}
                    </p>
                    <p className="cardOffer-Info-Ubicado"> 📍 {offer.city}</p>
                    <p className="cardOffer-Info-Ubicado">
                        📅 {offer.experienceYears} año/s de experiencia
                    </p>
                    <p className="cardOffer-Info-AnnualSalary">
                        (&euro;): {offer.annualSalary}
                    </p>

                </div>
            </section>
            
        </section>
    );
};

export default CardOffer;
