import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from '../components/MovieCard';

describe('MovieCard', () => {
  const mockMovie = {
    id: 1,
    title: 'Movie Title',
    vote_average: 7.5,
    overview: 'Movie overview',
    poster_path: '/path-to-image.jpg',
  };

  it('renders MovieCard component correctly', () => {
    render(<MovieCard movie={mockMovie} />);

    expect(screen.getByText('Movie Title')).toBeInTheDocument();
    expect(screen.getByText('Rating: 7.5')).toBeInTheDocument();
    expect(screen.getByText('Movie overview')).toBeInTheDocument();
    expect(screen.getByAltText('Movie Title')).toBeInTheDocument();
  });
});
