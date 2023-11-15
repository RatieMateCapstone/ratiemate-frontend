import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Footer from "../component/Footer";

 

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [timer, setTimer] = useState(null);

  const fetchMovies = () => {
    if (searchTerm) {
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=1600c73204a0404cf577c28950386edc&query=${encodeURIComponent(searchTerm)}`;

      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setMovies(data.results);
        })
        .catch(error => console.error("There has been a problem with your fetch operation:", error));
    }
  };

  useEffect(() => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      fetchMovies();
    }, 500);
    setTimer(newTimer);
    return () => clearTimeout(newTimer);
  }, [searchTerm]); 

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies();
  };


  return (
    <body id="home">
      <div>
        <h1 className="home-title">Search for a Movie!</h1>
        <div className="search-container">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a movie..."
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
        <div className="movie-grid">
          {movies.map(movie => (
            <div className="movie" key={movie.id}>
              <Link to={`/movieshow/${movie.id}`}>
                <h3>{movie.title}</h3>
                {movie.poster_path && (
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </body>
  );
};

export default Home;
