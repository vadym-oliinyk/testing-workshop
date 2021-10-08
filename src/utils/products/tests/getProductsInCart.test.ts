import getProductsInCart from '../getProductsInCart';
import {
  MOCKED_PRODUCTS,
  MOCKED_PRODUCTS_IN_CART,
  MOCKED_PRODUCTS_WITHOUT_IN_CART,
} from './mockedData';

describe('getProductsInCart()', () => {
  it('should return products with inCartAmount more than 0', () => {
    const result = getProductsInCart(MOCKED_PRODUCTS);

    expect(result).toStrictEqual(MOCKED_PRODUCTS_IN_CART);
  });

  it('should return [] if there is no products in cart', () => {
    const result = getProductsInCart(MOCKED_PRODUCTS_WITHOUT_IN_CART);

    expect(result).toStrictEqual([]);
  });
});
