import "./Reviews.css"

import Card from "../Components/Cards/Card"
import cardData from "../Data/scrapped_data.json"

export default function Reviews() {
  return (
    <div className="reviews-page">
      <div className="reviews-cards">
        {cardData.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  )
}