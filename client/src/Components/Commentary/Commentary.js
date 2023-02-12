import React from 'react'
import "./Commentary.css"

export default function Commentary({cardData}) {
  return (
    <div className="commentary">
      <p>Username: {cardData.user.name}</p>
      <p>Comment: {cardData.text}</p>
    </div>
  );
}