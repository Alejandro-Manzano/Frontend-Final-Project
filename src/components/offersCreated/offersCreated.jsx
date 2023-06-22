import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { getUserById } from '../../services/API_proyect/user.service';
import './offersCreated.css';

const OffersCreated = () => {
  const [offers, setOffers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userOffer = await getUserById(user._id);
        if (userOffer) {
          const { offersCreated } = userOffer.data;
          setOffers(offersCreated);
        }
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Ofertas Creadas</h1>
      {offers.length > 0 ? (
        <ul>
          {offers.map((offer) => (
            <li key={offer._id}>
              <h3>{offer.offerTitle}</h3>
              <p>Description: {offer.description}</p>
              <p>City: {offer.city}</p>
              <p>Job Type: {offer.jobType}</p>
              <p>Offer State: {offer.offerState}</p>
              <p>Technologies: {offer.technologies.join(', ')}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay ofertas creadas.</p>
      )}
    </div>
  );
};

export default OffersCreated;
