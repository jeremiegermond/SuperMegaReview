import React from 'react'
import "./Commentary.css"

export default function Commentary({cardData}) {
  const reviewData = cardData.Reviews
  return (
    <div className="commentary">
      <p>{reviewData.author}</p>
      <p>{reviewData.review}</p>
    </div>
  );
}