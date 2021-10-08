import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import CatalogCard from './CatalogCard';

describe('<CatalogCard />', () => {
  it('should render correctly', () => {
    render(
      <CatalogCard
        image="test.jpg"
        title="Test product"
        price={300}
        isInCart={false}
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
      />,
    );

    const imageSrc = screen
      .getByTestId('catalog-card-image')
      .getAttribute('src');
    const title = screen.getByTestId('catalog-card-title').textContent;
    const price = screen.getByTestId('catalog-card-price').textContent;

    expect(imageSrc).toBe('test.jpg');
    expect(title).toBe('Test product');
    expect(price).toBe('300 $');
  });

  it('should render add button if product not in cart', () => {
    render(
      <CatalogCard
        image="test.jpg"
        title="Test product"
        price={300}
        isInCart={false}
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
      />,
    );
    const addButton = screen.queryByTestId('catalog-card-add');
    const removeButton = screen.queryByTestId('catalog-card-remove');

    expect(addButton).not.toBeNull();
    expect(removeButton).toBeNull();
  });

  it('should render remove button if product in cart', () => {
    render(
      <CatalogCard
        image="test.jpg"
        title="Test product"
        price={300}
        isInCart
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
      />,
    );
    const removeButton = screen.queryByTestId('catalog-card-remove');
    const addButton = screen.queryByTestId('catalog-card-add');

    expect(removeButton).not.toBeNull();
    expect(addButton).toBeNull();
  });

  it('should call only onAddToCart on add button click', () => {
    // Arrange
    const addCallback = jest.fn();
    const removeCallback = jest.fn();
    render(
      <CatalogCard
        image="test.jpg"
        title="Test product"
        price={300}
        isInCart={false}
        onAddToCart={addCallback}
        onRemoveFromCart={removeCallback}
      />,
    );
    const addButton = screen.queryByTestId('catalog-card-add') as HTMLElement;

    // Act
    fireEvent.click(addButton);

    // Assert
    expect(addCallback).toBeCalled();
    expect(removeCallback).not.toBeCalled();
  });

  it('should call only onRemoveFromCart on remove button click', () => {
    const removeCallback = jest.fn();
    const addCallback = jest.fn();
    render(
      <CatalogCard
        image="test.jpg"
        title="Test product"
        price={300}
        isInCart
        onAddToCart={addCallback}
        onRemoveFromCart={removeCallback}
      />,
    );
    const removeButton = screen.queryByTestId(
      'catalog-card-remove',
    ) as HTMLElement;

    fireEvent.click(removeButton);

    expect(removeCallback).toBeCalled();
    expect(addCallback).not.toBeCalled();
  });
});
