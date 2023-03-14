import React from 'react';

const OfferList = ({ offers }) => {
  return (
    <div>
      <h2>Offers</h2>
      {offers && offers.length > 0 ? (
        offers.map((offer) => (
          <div key={offer.id}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <p>Price: {offer.price}</p>
          </div>
        ))
      ) : (
        <p>No offers available.</p>
      )}
    </div>
  );
};

export default OfferList;
