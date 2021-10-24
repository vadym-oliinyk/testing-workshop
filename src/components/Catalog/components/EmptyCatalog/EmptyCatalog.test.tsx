import React from 'react';
import { render, screen } from '@testing-library/react';

import EmptyCatalog from './EmptyCatalog';

it('should render correctly', () => {
  render(<EmptyCatalog />);
  const loader = screen.queryByTestId('catalog-loader');

  expect(loader).not.toBeNull();
});
