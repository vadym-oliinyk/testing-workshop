import React from 'react';
import { render, screen } from '@testing-library/react';
import EmptyCart from './EmptyCart';

describe('<EmptyCart />', () => {
  it('should render correctly', () => {
    render(<EmptyCart />);

    expect(screen.getByText('No products in cart'));
  });
});
