import { useParams } from 'react-router-dom';
import "./CardDetail.css"
import cardData from "../../Data/scrapped_data.json"
import { FaStar } from 'react-icons/fa';
import React from "react";

export default function CardDetail() {
  const { id } = useParams();
  const selectedCard = cardData.find(card => card.id === Number(id));
  console.log(selectedCard)

  return (
    <div>
      {selectedCard ? (
        <div className="film-review">
          <div className="film-review-left">
            <img src="/batman.jpg" alt={selectedCard.title} />
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
