import "./Reviews.css"

import Card from "../Components/Cards/Card"

export default function Reviews() {
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

  return (
    <div className="reviews-page">
      <div className="reviews-cards">
        {cardData.map(card => (
          <Card key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  )
}