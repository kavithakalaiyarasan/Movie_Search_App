import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from "/search.svg";

import MovieCard, { API_URL } from "./MovieCard";

function App() {
  const [movies, setMovies] = useState([])
  const [serachTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Titanic");
  }, []);


  return (
    <>
      <div className="app">
        <h1>MovieWorld</h1>

        <div className="search">
          <input placeholder="Search for movies"
            value={serachTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />

          <img src={SearchIcon} alt="search" onClick={() => searchMovies(serachTerm)} />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />

            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}

      </div>
    </>
  )
}

export default App