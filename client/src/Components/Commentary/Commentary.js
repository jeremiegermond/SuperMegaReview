import React from 'react'
import "./Commentary.css"

export default function Commentary({cardData}) {
  return (
    <div className="commentary">
      <p className="username">{cardData.author}</p>
      <br />
      <p>{cardData.review}</p>
    </div>
  );
}