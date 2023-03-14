import React, { useState } from 'react';

const OfferSearch = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
  };

  return (
    <div>
      <h2>Search Offers</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default OfferSearch;
