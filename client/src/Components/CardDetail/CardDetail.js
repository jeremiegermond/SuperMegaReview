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

  const [author, setAuthor] = useState("");
  const [review, setReview] = useState("");

  const addCommentary = (e) => {
    e.preventDefault();
    const commentary = { id, author, review};
     fetch(`/api/commentaries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentary),
    })
      .then((res) => res.json())
      .then((data) => {
        setCommentaries([...commentaries, data]);
        setAuthor("");
        setReview("");
      })
      .catch((err) => console.log(err));
  };

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
            <div className="commentary-add">
              <h1>Add a comment</h1>
              <form onSubmit={addCommentary}>
                <input
                  type="text"
                  name="author"
                  placeholder="Your name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <textarea
                  name="review"
                  placeholder="Your review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />
                <button type="submit">Add</button>
              </form>
            </div>
            <div className="commentary-cards">
              {commentaries.map((review) => (
                <Commentary key={review.uuid} cardData={review} />
              ))}
            </div>
            <div className="commentary-cards">
              {selectedCard.Reviews.map((review) => (
                <Commentary key={review.id} cardData={review} />
              ))}
            </div>
          </div>
        </div> : (
        <p>Card not found :/</p>
      )}
    </div>
  );
};
