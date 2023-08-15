import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div className='movie-details'>
      <h2>{movie.title}</h2>
      <p>Rating: {movie.vote_average}</p>
      <p>Year of Release: {movie.release_date}</p>
      <p>Length: {movie.runtime} min</p>
      <p>Director: {movie.director}</p>
      <p>Cast: {movie.cast}</p>
      <p>Description: {movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
