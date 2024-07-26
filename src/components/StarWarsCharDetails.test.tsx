// src/components/StarWarsCharDetail.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StarWarsCharDetail from './StarWarsCharDetail';
import useStarWarsPeople from '../hooks/useStarWarsPeople';
import { useParams } from 'react-router-dom';

// Mock the useParams hook
jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

// Mock the useStarWarsPeople hook
jest.mock('../hooks/useStarWarsPeople');

const mockUseParams = useParams as jest.Mock;
const mockUseStarWarsPeople = useStarWarsPeople as jest.Mock;

const mockPersonData = {
  name: 'Luke Skywalker',
  gender: 'male',
  hair_color: 'blond',
  eye_color: 'blue',
  height:'172',
  films: ['film1', 'film2'],
};

// Mock StarWarsFilms component
jest.mock('./StarWarsFilms', () => ({ url }: { url: string }) => (
  <div>{url}</div>
));

describe('StarWarsCharDetail', () => {
  beforeEach(() => {
    mockUseParams.mockReturnValue({ starwarsId: '1' });
    mockUseStarWarsPeople.mockReturnValue(mockPersonData);
  });

  test('renders StarWarsCharDetail component with correct data', () => {
    render(<StarWarsCharDetail />);

    expect(screen.getByText(/Name : Luke Skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/Gender : male/i)).toBeInTheDocument();
    expect(screen.getByText(/Hair Color: blond/i)).toBeInTheDocument();
    expect(screen.getByText(/Eye Color: blue/i)).toBeInTheDocument();
    expect(screen.getByText(/Height: 172/i)).toBeInTheDocument();
    expect(screen.getByText(/film1/i)).toBeInTheDocument();
    expect(screen.getByText(/film2/i)).toBeInTheDocument();
  });

  test('renders nothing when starWarsPeople is undefined', () => {
    mockUseStarWarsPeople.mockReturnValueOnce(undefined);

    const { container } = render(<StarWarsCharDetail />);
    
    expect(container).toBeEmptyDOMElement();
  });
});
