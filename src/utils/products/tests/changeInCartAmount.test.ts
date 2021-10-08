import changeInCartAmount from '../changeInCartAmount';
import {
  MOCKED_PRODUCTS,
  MOCKED_PRODUCTS_WITH_CHANGED_AMOUNT,
} from './mockedData';

describe('changeInCartAmount()', () => {
  it('should set amount to product by id', () => {
    const result = changeInCartAmount(MOCKED_PRODUCTS, 2, 133);

    expect(result).toStrictEqual(MOCKED_PRODUCTS_WITH_CHANGED_AMOUNT);
  });

  it('should not change products if there is no id', () => {
    const result = changeInCartAmount(MOCKED_PRODUCTS, 333, 133);

    expect(result).toStrictEqual(MOCKED_PRODUCTS);
  });
});
