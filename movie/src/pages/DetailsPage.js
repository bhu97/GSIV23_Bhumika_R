import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MovieDetails from '../components/MovieDetails';
import { setMovies } from '../slices/MovieSlice';

const API_KEY = 'bffc03f91900ab011766dddce474b4fb';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const { upcomingMovies } = useSelector((state) => state.movies);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      );
      const data = await response.json();
      dispatch(setMovies([...upcomingMovies, data]));
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };
  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails, movieId]);

  const movie = upcomingMovies.find((movie) => movie.id === Number(movieId));

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='details-page'>
      <MovieDetails movie={movie} />
    </div>
  );
};

export default DetailsPage;
