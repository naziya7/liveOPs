import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOffer } from '../services/api';

function OfferCreate() {
  const [offer, setOffer] = useState({
    name: '',
    description: '',
    price: '',
  });

  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setOffer((prevOffer) => ({ ...prevOffer, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    createOffer(offer).then(() => {
      navigate('/');
    });
  }

  return (
    <div>
      <h1>Create Offer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={offer.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={offer.description} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" value={offer.price} onChange={handleInputChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default OfferCreate;
