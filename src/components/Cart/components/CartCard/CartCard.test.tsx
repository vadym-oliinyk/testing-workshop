import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import CartCard from './CartCard';

describe('<CartCard />', () => {
  it('should render correctly', () => {
    render(
      <CartCard
        image="test.jpg"
        title="Test product"
        price={300}
        inCartAmount={1}
        onLess={() => {}}
        onMore={() => {}}
      />,
    );
    const imageSrc = screen.getByTestId('cart-card-image').getAttribute('src');
    const title = screen.getByTestId('cart-card-title').textContent;
    const price = screen.getByTestId('cart-card-price').textContent;
    const amount = screen.getByTestId('cart-card-amount').textContent;

    expect(imageSrc).toBe('test.jpg');
    expect(title).toBe('Test product');
    expect(price).toBe('300 $');
    expect(amount).toBe('1');
  });

  it('should call only onMore callback on more btn click', () => {
    const moreCallback = jest.fn();
    const lessCallback = jest.fn();
    render(
      <CartCard
        image="test.jpg"
        title="Test product"
        price={300}
        inCartAmount={1}
        onLess={lessCallback}
        onMore={moreCallback}
      />,
    );
    const moreButton = screen.getByTestId('cart-card-more');

    fireEvent.click(moreButton);

    expect(moreCallback).toBeCalled();
    expect(lessCallback).not.toBeCalled();
  });

  it('should call only onLess callback on less btn click', () => {
    const moreCallback = jest.fn();
    const lessCallback = jest.fn();
    render(
      <CartCard
        image="test.jpg"
        title="Test product"
        price={300}
        inCartAmount={1}
        onLess={lessCallback}
        onMore={moreCallback}
      />,
    );
    const lessButton = screen.getByTestId('cart-card-less');

    fireEvent.click(lessButton);

    expect(lessCallback).toBeCalled();
    expect(moreCallback).not.toBeCalled();
  });
});
