import React from 'react'
import "./Commentary.css"

export default function Commentary({cardData}) {
  return (
    <div className="commentary">
      <p>Username: {cardData.user.name}</p>
      <img src={cardData.user.picture.replace("https", "http")} alt={cardData.user.name}
      style={{width: "50px", height: "50px", borderRadius: "50%"}}/>
      <p>Comment: {cardData.text}</p>
    </div>
  );
}