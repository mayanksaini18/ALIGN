import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main headline', () => {
  render(<App />);
  const headlineElement = screen.getByText(/We Build Brands That Stand Out/i);
  expect(headlineElement).toBeInTheDocument();
});
