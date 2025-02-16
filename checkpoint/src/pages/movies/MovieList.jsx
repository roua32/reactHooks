import MovieCard from "../../components/moviecard/MovieCard";
import Row from "react-bootstrap/Row";
import "./style.css";
import { useContext, useRef } from "react";
import { StoreContext } from "../../utils/store";

function MovieList() {
  const { state, dispatch } = useContext(StoreContext);
  console.log("search", state.search);
  const titleRef = useRef(null);
  const posterRef = useRef(null);
  const genreRef = useRef(null);
  const rateRef = useRef(null);

  const handleAddNewMovie = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_MOVIE",
      title: titleRef.current.value,
      poster: posterRef.current.value,
      genre: genreRef.current.value,
      rate: rateRef.current.value,
    });
    titleRef.current.value = "";
    posterRef.current.value = "";
    genreRef.current.value = "";
    rateRef.current.value = "";
  };

  return (
    <div id="moviePage">
      <h1 id="titre">Our Movies</h1>
      <form id="fromMovie">
        <input ref={titleRef} type="text" placeholder="Movie Title" />
        <input ref={posterRef} type="text" placeholder="Poster Url" />
        <input ref={genreRef} type="text" placeholder="Category" />
        <input ref={rateRef} type="number" placeholder="Rating" />
        <button onClick={handleAddNewMovie}>Add to the list</button>
      </form>
      <div id="movieList">
        <Row
          xs={1}
          md={2}
          className="gap-5 d-flex flex-wrap justify-content-center"
        >
          {state.movies
            .filter((movie) =>
              movie.title.toLowerCase().includes(state.search.toLowerCase())
            )
            .filter((movie) =>
              state.RatingSearch ? movie.rating == state.RatingSearch : true
            )
            .map((movie, i) => (
              <MovieCard {...movie} key={i} />
            ))}
        </Row>
      </div>
    </div>
  );
}

export default MovieList;
