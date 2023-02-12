import {Routes, Route, BrowserRouter} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import CardDetail from "./Components/CardDetail/CardDetail";

import Home from "./Home/Home"
import Reviews from "./Reviews/Reviews";
import About from "./About/About"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/detail/:id" element={<CardDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}