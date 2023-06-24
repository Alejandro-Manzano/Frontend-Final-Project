import React, { useState } from 'react';
import './Offers.css';
import OffersCreated from '../offersCreated/offersCreated';
import OffersInterested from '../OffersInterested/offersInterested';

const Offers = () => {
  const [showCreated, setShowCreated] = useState(true);

  const handleShowCreated = () => {
    setShowCreated(true);
  };

  const handleShowInterested = () => {
    setShowCreated(false);
  };

  return (
    <div className="Offers-Btn-filter">
      <div>
        <button onClick={handleShowCreated}>Mis ofertas</button>
        <button onClick={handleShowInterested}>Ofertas que sigo</button>
      </div>
      {showCreated ? <OffersCreated /> : <OffersInterested />}
    </div>
  );
};

export default Offers;
