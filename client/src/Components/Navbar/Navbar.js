import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <header>
          <div className="nav">
            <div className="nav-items">
              <ul>
                <p><li>
                  <Link className="nav-link" to="/home">HOME</Link>
                </li></p>
                <p><li>
                  <Link className="nav-link" to="/reviews">REVIEWS</Link>
                </li></p>
                <p><li>
                  <Link className="nav-link" to="/about">ABOUT</Link>
                </li></p>
              </ul>
            </div>
          </div>
        </header>
      </nav>
    )
  }
}