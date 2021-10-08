import React from 'react';
import { render, screen } from '@testing-library/react';
import CartFooter from './CartFooter';

const MOCKED_TOTAL_PRICE = 300;

describe('<CartFooter />', () => {
  it('should render correctly', () => {
    render(<CartFooter totalPrice={MOCKED_TOTAL_PRICE} />);
    const totalPrice = screen.getByTestId('total-price').textContent;

    expect(totalPrice).toBe(`${MOCKED_TOTAL_PRICE} $`);
  });
});
