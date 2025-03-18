import PropTypes from "prop-types";
import "./style.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <Card id="card" style={{ width: "320px" }}>
      <Card.Img variant="top" src={posterURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{`⭐`.repeat(rating)}</Card.Text>
        <Card.Footer>
          <Link
            to={`/movie/${title}`}
            style={{ textDecoration: "none", color: "blue" }}
          >
            Watch Now
          </Link>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  posterURL: PropTypes.string,
  rating: PropTypes.number,
};

export default MovieCard;
