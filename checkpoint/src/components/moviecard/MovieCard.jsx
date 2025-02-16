import PropTypes from "prop-types";
import "./style.css";
import { Button, Card } from "react-bootstrap";
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
          <Link>Watch Now</Link>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

MovieCard.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  posterURL: PropTypes.string,
  rating: PropTypes.number,
};
export default MovieCard;
