import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setSearchResults } from '../slices/MovieSlice';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';

const API_KEY = 'bffc03f91900ab011766dddce474b4fb';

const ListPage = () => {
  const dispatch = useDispatch();
  const { upcomingMovies, searchResults } = useSelector(
    (state) => state.movies
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchUpcomingMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
      );
      const data = await response.json();
      dispatch(setMovies(data.results));
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
    }
  };

  useEffect(() => {
    fetchUpcomingMovies();
  }, [fetchUpcomingMovies]);

  const loadMoreMovies = () => {};

  const handleSearch = async (searchQuery) => {
    if (searchQuery.trim() === '') {
      dispatch(setSearchResults([]));
      return;
    }

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      );
      const data = await response.json();
      dispatch(setSearchResults(data.results));
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div className='list-page'>
      <h1>Upcoming Movies</h1>
      <SearchBar onSearch={handleSearch} />
      <InfiniteScroll
        dataLength={upcomingMovies.length}
        next={loadMoreMovies}
        hasMore={true}
      >
        {searchResults.length > 0
          ? searchResults.map((movie) => (
              <Link to={`/details/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
              </Link>
            ))
          : upcomingMovies.map((movie) => (
              <Link to={`/details/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
              </Link>
            ))}
      </InfiniteScroll>
    </div>
  );
};

export default ListPage;
