import removeFromCart from '../removeFromCart';
import {
  MOCKED_PRODUCTS,
  MOCKED_PRODUCTS_REMOVED_FROM_CART,
} from './mockedData';

describe('removeFromCart()', () => {
  it('should set inCartAmount to 0 by id', () => {
    const result = removeFromCart(MOCKED_PRODUCTS, 1);

    expect(result).toStrictEqual(MOCKED_PRODUCTS_REMOVED_FROM_CART);
  });
});
