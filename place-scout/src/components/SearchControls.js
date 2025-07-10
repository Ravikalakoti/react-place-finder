import React, { useState } from 'react';

function SearchControls({ onSearch }) {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('restaurant');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location) onSearch(location, type);
  };

  return (
    <form onSubmit={handleSubmit} className="search-controls">
      <input
        type="text"
        placeholder="Enter a location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="restaurant">Restaurant</option>
        <option value="park">Park</option>
        <option value="hospital">Hospital</option>
        <option value="museum">Museum</option>
        <option value="cafe">Cafe</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchControls;
