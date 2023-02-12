import React, { useState } from 'react';
import "./SearchBar.css"

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(searchTerm);
  };

  return (
    <form className="search">
      <input
        className="bar"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search a movie..."
      />
    </form>
  );
};

export default SearchBar;
