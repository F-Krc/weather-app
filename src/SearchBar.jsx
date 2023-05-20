import React, { useState } from 'react';

function SearchBar({ onSearchCity }) {
    //console.log(onSearchCity);
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
   onSearchCity(city)
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        placeholder="Stadt eingeben"
      />
      <button type="submit">Suche</button>
    </form>
  );
}

export default SearchBar;