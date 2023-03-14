import React, { useState } from 'react';
import { createOffer } from '../services/api'

const OfferForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newOffer = {
      title: e.target.title.value,
      description: e.target.description.value,
      price: e.target.price.value,
      image: e.target.image.value,
    };
  
    try {
      const response = await createOffer(newOffer); // send POST request to create new offer
      console.log('New offer created:', response);
      // do something with the response, such as redirect to the newly created offer's page
    } catch (error) {
      console.error('Error creating new offer:', error);
      // handle the error, such as displaying an error message to the user
    }
  
    e.target.reset(); // clear the form after submission
  };

  return (
    <div>
      <h2>Create Offer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OfferForm;
