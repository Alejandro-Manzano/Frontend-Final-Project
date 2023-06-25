import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { getUserById } from '../../services/API_proyect/user.service';
import './offersInterested.css';

const OffersInterested = () => {
  const [offers, setOffers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userOffer = await getUserById(user._id);
        if (userOffer) {
          setOffers(userOffer);
        }
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <section className="experience-p-container_general">
      <h3>Ofertas en las que estoy interesado/a</h3>
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
        <p>No hay ofertas en las que estés interesado/a.</p>
      )}
    </section>
  );
};

export default OffersInterested;
