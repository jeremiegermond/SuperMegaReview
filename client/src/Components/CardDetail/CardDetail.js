import { useParams } from 'react-router-dom';
import "./CardDetail.css"
import cardData from "../../Data/scrapped_data.json"
import { FaStar } from 'react-icons/fa';
import React, {useEffect, useState} from "react";
import Commentary from "../Commentary/Commentary";

export default function CardDetail() {
  const { id } = useParams();
  const selectedCard = cardData.find(card => card.id === Number(id));
  const [commentaries, setCommentaries] = useState([]);

  useEffect(() => {
    fetch(`/api/commentaries/${id}`)
      .then((res) => res.json())
      .then((data) => setCommentaries(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {selectedCard ?
        <div>
          <div className="film-review">
            <div className="film-review-left">
              <img src={selectedCard.cover} alt={selectedCard.title} />
              <h1>{selectedCard.title}</h1>
              <h3>Rating: {selectedCard.rating}<FaStar className="card-star" /></h3>
            </div>
            <div className="film-review-right">
              <p className="film-review-subtitle">Certificate</p>
              <p>{selectedCard.certificate}</p>
              <p className="film-review-subtitle">Genre</p>
              <p>{selectedCard.genre}</p>
              <p className="film-review-subtitle">Time</p>
              <p>{selectedCard.runtime}</p>
              <p className="film-review-subtitle">Release Year</p>
              <p>{selectedCard.year}</p>
              <p className="film-review-subtitle">Directors</p>
              <p>{selectedCard.Directors}</p>
              <p className="film-review-subtitle">Stars</p>
              <p>{selectedCard.Stars}</p>
            </div>
          </div>
          <div className="commentary-page">
            <h1>Commentaries</h1>
            <div className="commentary-cards">
              {commentaries.map((commentary) => (
                <Commentary
                  key={commentary.id}
                  cardData={commentary}
                />
              ))}
            </div>
          </div>
        </div> : (
        <p>Card not found</p>
      )}
    </div>
  );
};
