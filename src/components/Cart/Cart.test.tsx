import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Cart from './Cart';

const MOCKED_PRODUCTS: FormattedProduct[] = [
  {
    id: 1,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 1,
  },
  {
    id: 2,
    image: 'https://test.jpg',
    price: 200,
    title: 'Some test product',
    inCartAmount: 2,
  },
  {
    id: 3,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 1,
  },
];

it('should match snapshot', () => {
  const { container } = render(
    <Cart products={MOCKED_PRODUCTS} onAmountChange={() => {}} />,
  );

  expect(container).toMatchSnapshot();
});

it('should call onAmountChange with right id and new amount', () => {
  const onAmountChangeCallback = jest.fn();
  render(
    <Cart products={MOCKED_PRODUCTS} onAmountChange={onAmountChangeCallback} />,
  );
  const firstProductMoreBtn = screen.getAllByTestId('cart-card-more')[0];
  const secondProductLessBtn = screen.getAllByTestId('cart-card-less')[1];

  fireEvent.click(firstProductMoreBtn);
  fireEvent.click(secondProductLessBtn);

  expect(onAmountChangeCallback.mock.calls).toEqual([
    [1, 2],
    [2, 1],
  ]);
});
