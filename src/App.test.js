import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fake App Test/i);
  // const linkElement = screen.getByText(/My awesome React Project/i);
  expect(linkElement).toBeInTheDocument();
});
