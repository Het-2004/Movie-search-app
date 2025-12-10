import React, { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './SearchIcon';
import MovieCard from './MovieCard';

// OMDB API URL - You'll need to get your own free API key from http://www.omdbapi.com/apikey.aspx
//const API_URL = //'http://www.omdbapi.com?apikey=b6003d8a';
const API_URL = 'http://www.omdbapi.com?apikey=c0af176b';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to search movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  // Search for a default movie on initial load
  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchMovies(searchTerm);
    }
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" aria-label="Search">
          <SearchIcon />
        </button>
      </form>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      
      <footer className="footer">
        <div className="footer-content">
          <div className="creator-icon">HS</div>
          <p className="creator-name">Created by Het Solanki</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
