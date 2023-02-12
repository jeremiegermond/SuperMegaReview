import React from "react";
import "./Home.css"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Checkout this game!</h1>
      <div className="home-mid">
        <Link className="home-image" to="https://github.com/Clement-Lnrd/Garbage-Clicker">
          <img alt="image" src="/image.png" className="game-image"></img>
        </Link>
        <div className="game-writing">
          <p>Garbage Clicker is a 2D shooter game whose purpose is to pick up waste bags that pass on the screen.
            Incarnate several heroes [that are Epitech pedagos] and catch all the garbages!
          </p>
        </div>
      </div>
    </div>
  )
};