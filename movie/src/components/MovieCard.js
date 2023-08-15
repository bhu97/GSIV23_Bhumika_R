import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/details/${movie.id}`} className='movie-card'>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.vote_average}</p>
      <p>{movie.overview}</p>
    </Link>
  );
};

export default MovieCard;
