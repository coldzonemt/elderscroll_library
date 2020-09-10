import React from 'react';
import { render } from '@testing-library/react';
import MainDisplay from './MainDisplay/MainDisplay.jsx';

test('renders learn react link', () => {
  const { getByText } = render(<MainDisplay />);
  const linkElement = getByText(/Welcome to the Elderscroll Library/i);
  expect(linkElement).toBeInTheDocument();
});
