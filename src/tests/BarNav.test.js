import { render, screen } from '@testing-library/react';
import { BarNav } from '../components';

test('render barnav', () => {
  // check if barnav is rendered
  render(<BarNav />)
  const barnav = screen.getByTestId('barnav')
  expect(barnav).toBeInTheDocument()
})

test('barnav user email', () => {
  // check if user-email is show
  render(<BarNav />)
  const email = screen.getByText(/.{1,}@.{1,}\..{1,}/)
  expect(email).toBeInTheDocument()
})
