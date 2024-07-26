// src/components/StarWars.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import StarWars from './StarWars';
import useStarWars from '../hooks/useStarWars';

// Mock the useStarWars hook
jest.mock('../hooks/useStarWars');

const mockUseStarWars = useStarWars as jest.Mock;

// Mock StarWarsChar component
jest.mock('./StarWarsChar', () => ({ char }: { char: any }) => (
  <div>{char.name}</div>
));

describe('StarWars', () => {
  const mockStarWarsList = [
    { name: 'Luke Skywalker' },
    { name: 'Darth Vader' },
  ];

  beforeEach(() => {
    mockUseStarWars.mockReturnValue(mockStarWarsList);
  });

  test('renders StarWars component with list of characters', () => {
    render(
      <Router>
        <StarWars />
      </Router>
    );

    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/Darth Vader/i)).toBeInTheDocument();
  });

  test('renders nothing when starWarsList is empty', () => {
    mockUseStarWars.mockReturnValueOnce([]);

    const { container } = render(
      <Router>
        <StarWars />
      </Router>
    );

    expect(container).toBeEmptyDOMElement();
  });
});
