import { useParams } from 'react-router-dom';
import "./CardDetail.css"

import { FaStar } from 'react-icons/fa';
import React from "react";

export default function CardDetail() {
  const { id } = useParams();
  const cardData = [
    {
      id: 1,
      title: 'Batman',
      image: '/batman.jpg',
      rating: 4.5
    },
    {
      id: 2,
      title: 'Spider-Man',
      image: '/spider-man.jpg',
      rating: 4.7
    },
    // Add more card data here
  ];
  const selectedCard = cardData.find(card => card.id === Number(id));

  return (
    <div>
      {selectedCard ? (
        <div className="film-review">
          <div className="film-review-left">
            <img src={selectedCard.image} alt={selectedCard.title} />
            <h1>{selectedCard.title}</h1>
            <h3>Rating: {selectedCard.rating}<FaStar className="card-star" /></h3>
          </div>
          <div className="film-review-right">
            <p className="film-review-subtitle">Score:</p>
            <p>8.7</p>
            <p className="film-review-subtitle">Type de film</p>
            <p>Science-Fiction</p>
            <p className="film-review-subtitle">Durée</p>
            <p>1h57</p>
            <p className="film-review-subtitle">Réalisateurs</p>
            <p>Jean Dujardin, Gilles Lelouche</p>
            <p className="film-review-subtitle">Stars</p>
            <p>Jean Dujardin, Gilles Lelouche</p>
          </div>
        </div>
      ) : (
        <p>Card not found</p>
      )}
    </div>
  );
};
