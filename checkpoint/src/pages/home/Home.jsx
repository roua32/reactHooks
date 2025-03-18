import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to MovieApp 🎬</h1>
        <p>Discover and watch amazing movies with us!</p>
        <Link to="/movies" className="explore-btn">
          Explore Movies
        </Link>
      </header>

      <section className="featured-section">
        <h2>Featured Movies</h2>
        <div className="movie-list">
          <div className="movie-card">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTO4DudfFR67_SUcvAh9mOgZl7qpqFbf9B0nNad5a1hCOUSNN7b"
              width={300}
              height={300}
              alt="Movie Poster"
            />
            <h3>USS Greyhound : La Bataille de l'Atlantique</h3>
           
          </div>

          <div className="movie-card">
            <img
              src="https://play-lh.googleusercontent.com/A-whChnKsPup-PjHng3Lr6ZxaX7mekBJUBeZU-8BAmTX80i3woipgxP7Q6OSpdhBjTX_uA"
              width={300}
              height={300}
              alt="Movie Poster"
            />
            <h3>Le Terminal</h3>
           
          </div>

          <div className="movie-card">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTbGZKAgBu7fWkY2UM-z5Psqtj7PwpjaJJytwGDhW757oMo4q6f"
              alt="Movie Poster"
              width={300}
              height={300}
            />
            <h3>La Mission</h3>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
