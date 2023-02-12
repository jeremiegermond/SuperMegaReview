import React from 'react';
import "./Card.css"
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Card({cardData}) {
  return (
    <Link className="card" to={`/detail/${cardData.id}`}>
      <div className="top-card">
        <img src="/batman.jpg" alt={cardData.title} />
      </div>
      <div className="bottom-card">
        <p className="bottom-title">{cardData.title}</p>
        <div className="bottom-rating">
          <p>Rating: </p>
          <p>{cardData.rating}<FaStar className="card-star" /></p>
        </div>
      </div>
    </Link>
  );
}