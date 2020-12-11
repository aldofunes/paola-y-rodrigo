import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("renders the couple's name", () => {
  render(<App />);
  const linkElement = screen.getByText(/Paola y Rodrigo/i);
    
  
  
  expect(linkElement).toBeInTheDocument();
});
