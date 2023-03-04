import { render, screen } from '@testing-library/react';
import { Main } from '../pages';

test('renders learn react link', () => {
  render(<Main />);
  const linkElement = screen.getByText(/app/i);
  expect(linkElement).toBeInTheDocument();
});
