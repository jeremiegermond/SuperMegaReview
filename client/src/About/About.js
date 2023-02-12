import "./About.css"
import { Link } from "react-router-dom"
export default function About() {
  return (
    <div className="about-page">
      <h1>Welcome to SuperMegaReview!</h1>
      <h2>Authors</h2>
      <div className="links">
        <Link className="link" to="https://github.com/jeremiegermond">Jérémie Germond</Link>
        <Link className="link" to="https://github.com/0xCurtis">Romain Leemans</Link>
        <Link className="link" to="https://github.com/Thibb1">Thibault Brumaire</Link>
        <Link className="link" to="https://github.com/AugustinPif">Augustin Piffeteau</Link>
      </div>
      <p>Here, we showcase our love for superheroes through film reviews and promotion of a superhero game.</p>
      <h2>Film Reviews</h2>
      <p>As superhero fans, we believe that the best way to experience these larger-than-life characters is through the big screen. From Marvel to DC, we review the latest superhero films and give our take on the heroes, the villains, and the storylines.</p>
      <p>Whether you're a die-hard fan or just looking for a new movie to watch, our reviews provide an in-depth look at the superhero film genre and what sets each movie apart.</p>
      <h2>Superhero Game</h2>
      <p>In addition to our film reviews, we also promote a superhero game that allows players to take on the role of their favorite characters and embark on exciting adventures. From flying through the city as Superman to swinging through the streets as Spider-Man, the game provides an immersive experience that brings the world of superheroes to life.</p>
      <p>Whether you're a seasoned gamer or just looking for a fun new way to experience your favorite heroes, this game is the perfect choice for all superhero fans.</p>
      <h2>Join the Community</h2>
      <p>We invite you to join us in our love for superheroes and to share your thoughts and opinions on the latest films and games. With new reviews and promotions added regularly, our website is the perfect place for all fans to connect and share their passion for these iconic characters.</p>
      <p>So why wait? Join the community of superhero lovers today and discover why the world of superheroes is so much more than just a movie or a game.</p>
    </div>
  )
}