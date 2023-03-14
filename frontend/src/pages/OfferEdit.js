import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateOffer } from '../services/api';

function OfferEdit() {
  const { id } = useParams();
  const [offer, setOffer] = useState({
    name: '',
    description: '',
    price: '',
  });

  const history = useNavigate();

  useEffect(() => {
    fetch(`/api/offers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setOffer(data);
      });
  }, [id]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setOffer((prevOffer) => ({ ...prevOffer, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateOffer(offer).then(() => {
      history.push('/');
    });
  }

  return (
    <div>
      <h1>Edit Offer</h1>
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default OfferEdit;
