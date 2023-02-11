import "./Card.css"
import { FaStar } from "react-icons/fa"

export default function Card() {
  return (
    <div className="card">
      <div className="top-card">
        <img src="/batman.jpg" alt="batman" />
      </div>
      <div className="bottom-card">
        <p className="bottom-title">Title</p>
        <p>Rating: 4.5<FaStar className="card-star" /></p>
      </div>
    </div>
  )
}