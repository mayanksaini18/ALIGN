import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main headline', async () => {
  render(<App />);
  // The text is split across multiple spans, so we test for the accessible name.
  const headlineElement = screen.getByRole('heading', { name: /align your brand with success/i });
  expect(headlineElement).toBeInTheDocument();
});
