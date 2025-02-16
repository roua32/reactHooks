import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import MovieList from "./pages/movies/MovieList";
import Login from "./pages/login/Login";
import NavBar from "./components/navbar/Navbar";

function App() {
  return (
    <div id="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
