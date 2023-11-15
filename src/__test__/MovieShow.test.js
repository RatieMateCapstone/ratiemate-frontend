import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import MovieShow from '../pages/MovieShow'; // Make sure this path is correct
import { BrowserRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Mock MUI Rating as it's not the focus of our tests
jest.mock('@mui/material/Rating', () => () => <div>Rating</div>);

// Mock useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('MovieShow', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ id: '123' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders error message when movie details fetch fails', async () => {
    global.fetch = jest.fn();
    fetch.mockRejectedValueOnce(new Error('Network response was not ok'));
    await act(async () => {
      render(
        <BrowserRouter>
          <MovieShow />
        </BrowserRouter>
      );
    });

    // Use waitFor to handle the asynchronous nature of state update
    await waitFor(() => {
      expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
      expect(screen.getByText(/Movie not found/i)).toBeInTheDocument();
    });
  });

  // ... other tests
});

