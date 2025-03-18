import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../utils/Store";
import "./style.css";

function MovieDetails() {
  const { title } = useParams(); // Get the movie title from the URL
  const { state } = useContext(StoreContext);
  const movie = state.movies.find((m) => m.title === title);

  if (!movie) {
    return <h2>Movie not found!</h2>;
  }

  return (
    <div id="movieDetails">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link
        to="/"
        style={{ textDecoration: "none", color: "blue", marginTop: "20px" }}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default MovieDetails;
