import getTotalPrice from '../getTotalPrice';
import {
  MOCKED_PRODUCTS_IN_CART,
  MOCKED_PRODUCTS_WITH_CHANGED_AMOUNT,
  MOCKED_PRODUCTS_WITH_FLOAT_PRICE,
} from './mockedData';

describe('getTotalPrice()', () => {
  it('should count correct price for products', () => {
    const result = getTotalPrice(MOCKED_PRODUCTS_IN_CART);

    expect(result).toBe(600);
  });

  it('should count correct price for products with amount more than 1', () => {
    const result = getTotalPrice(MOCKED_PRODUCTS_WITH_CHANGED_AMOUNT);

    expect(result).toBe(27200);
  });

  it('should round result to 2 digits after dot', () => {
    const result = getTotalPrice(MOCKED_PRODUCTS_WITH_FLOAT_PRICE);

    expect(result).toBe(118.27);
  });
});
