import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../utils/store";

function NavBar() {
  const { state, dispatch } = useContext(StoreContext);
  return (
    <Navbar id="nav" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">CineWave</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", display: "flex", gap: "20px" }}
            navbarScroll
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/login">Login</NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Title"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                dispatch({
                  type: "SEARCH",
                  payload: e.target.value,
                });
              }}
            />
            <Form.Control
              type="search"
              placeholder="Rating"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                dispatch({
                  type: "RATING_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
