import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { getUserById } from '../../services/API_proyect/user.service';
import './offersCreated.css';

const OffersCreated = () => {
  const [offers, setOffers] = useState([]);
  const { user } = useAuth();
  let data = user.data;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userOffer = await getUserById(user._id);

        console.log(userOffer);
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
    <section className="offer-create-container_general experience-p-container_general">
      <h3>Ofertas Creadas</h3>
      {offers.length > 0 ? (
        <ul>
          {offers.map((offer) => (
            <li key={offer._id}>
              <h3>{offer.offerTitle}</h3>
              <p>Descripción: {offer.description}</p>
              <p>Ciudad: {offer.city}</p>
              <p>Tipo de trabajo: {offer.jobType}</p>
              <p>Estado de la oferta: {offer.offerState}</p>
              <p>Tecnologías: {offer.technologies.join(', ')}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay ofertas creadas.</p>
      )}
    </section>
  );
};

export default OffersCreated;
