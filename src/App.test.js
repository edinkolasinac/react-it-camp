import { render, screen } from '@testing-library/react';
import Badge1 from './functional/Badge1';


test('renders learn react link', () => {
  render(<Badge1 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
