import './Movies.css'; // crea este archivo para estilos personalizados si lo deseas
import { useState, useEffect } from 'react';
import api from '../api/axios';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get('/products/movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movies-page">
      <h1 className="page-title">All Movies</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img
              src={movie.image || '/movieimages/image.png'}
              alt={movie.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/movieimages/image.png';
              }}
            />
            <h3>{movie.name}</h3>
            <p>Category: {movie.category}</p>
            <p>Price: {movie.price}</p>
            <p>Rating: {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
