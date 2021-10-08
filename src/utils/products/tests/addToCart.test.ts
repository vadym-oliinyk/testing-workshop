import addToCart from '../addToCart';
import { MOCKED_PRODUCTS, MOCKED_PRODUCTS_ADDED_TO_CART } from './mockedData';

describe('addToCart()', () => {
  it('should set inCartAmount to 1 by id', () => {
    const result = addToCart(MOCKED_PRODUCTS, 2);

    expect(result).toStrictEqual(MOCKED_PRODUCTS_ADDED_TO_CART);
  });
});
