import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Catalog from './Catalog';

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
    inCartAmount: 0,
  },
  {
    id: 3,
    image: 'https://test.jpg',
    price: 300,
    title: 'Some test product',
    inCartAmount: 1,
  },
];

it('should render correctly', () => {
  render(
    <Catalog
      products={MOCKED_PRODUCTS}
      onAddToCart={() => {}}
      onRemoveFromCart={() => {}}
    />,
  );
  const cards = screen.queryAllByTestId('catalog-card');

  expect(cards.length).toBe(MOCKED_PRODUCTS.length);
});

it('should call onAddToCart and onRemoveFromCart with product id', () => {
  const addCallback = jest.fn();
  const removeCallback = jest.fn();
  render(
    <Catalog
      products={MOCKED_PRODUCTS}
      onAddToCart={addCallback}
      onRemoveFromCart={removeCallback}
    />,
  );
  const addBtn = screen.queryAllByTestId('catalog-card-add')[0];
  const removeBtn = screen.queryAllByTestId('catalog-card-remove')[0];

  fireEvent.click(addBtn);
  fireEvent.click(removeBtn);

  expect(addCallback).toBeCalledWith(2);
  expect(removeCallback).toBeCalledWith(1);
});
