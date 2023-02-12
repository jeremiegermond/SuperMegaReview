import React, { useState } from 'react';
import "./Reviews.css"
import Card from "../Components/Cards/Card"
import cardData from "../Data/scrapped_data.json"
import SearchBar from "../Components/SearchBar/SearchBar";

export default function Reviews() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCards, setSelectedCards] = useState(cardData);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const selected = term.length > 0 ? cardData.filter((card) => card.title.toLowerCase().includes(term.toLowerCase())) : cardData;
    setSelectedCards(selected);
  };

  return (
    <div className="reviews-page">
      <SearchBar onSearch={handleSearch} />
      <div className="reviews-cards">
        {selectedCards.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
        {selectedCards.length === 0 && searchTerm.length > 0 && (
          <p>No card found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  )
}
